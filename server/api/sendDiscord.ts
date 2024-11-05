import {
  Client,
  TextChannel,
  EmbedBuilder,
  GatewayIntentBits,
} from "discord.js";

interface Incomming {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  token: string;
}

export default defineEventHandler(async (event) => {
  const data = await readBody<Incomming>(event);

  const tokenOk = await checkToken(
    data.token,
    useRuntimeConfig().google_captcha_private
  );
  if (!tokenOk) {
    setResponseStatus(event, 400);
    return { m: "Invalid token" };
  } else {
    console.log("token ok");
  }
  const channel =
    data.email === "checkly-tester@dyna.host"
      ? useRuntimeConfig().CHECKLY_CHANNEL
      : useRuntimeConfig().MESSAGES_CHANNEL;
  await discordMessager(data, channel);
  setResponseStatus(event, 201);
  return { m: "OK" };
});

async function checkToken(token: string, secret: string): Promise<boolean> {
  try {
    const data = await $fetch<{ success: boolean }>(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );
    return Boolean(data) == true && data?.success == true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function discordMessager(req: Incomming, channelID: string) {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  const message = new EmbedBuilder()
    .setTitle("New message from tairov.ski")
    .setAuthor({
      name: `${req.firstName} ${req.lastName}`,
      url: `https://someUrl.com/?${req.email}`,
    })
    .setDescription(req.message)
    .addFields({ name: "Email:", value: req.email, inline: true })
    .setTimestamp();

  await new Promise<void>(async (resolve) => {
    client.once("ready", async () => {
      console.log("discord ready");
      const channel = (await client.channels.fetch(channelID)) as TextChannel;
      const { createdAt } = await channel.send({ embeds: [message] });

      console.log(`discord send @ ${createdAt.toLocaleString()}`);
      await client.destroy();
      resolve();
    });

    await client.login(useRuntimeConfig().discord_key);
    console.log("discord login");
  });
}
