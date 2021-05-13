const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const fetch = require("node-fetch");
admin.initializeApp();
const Discord = require("discord.js");
const client = new Discord.Client();
const discordKey = functions.config().discord.token;

exports.sendMessage = functions.https.onRequest((req, res) => {
    console.log("starting...");
    cors(req, res, () => {
        if (
            req.query.email &&
            req.query.message &&
            req.query.firstName &&
            req.query.lastName
        ) {
            console.log("all values are here...");

            console.log("starting recaptcha check...");
            fetch(
                "https://www.google.com/recaptcha/api/siteverify?secret=" +
                    functions.config().google.captcha +
                    "&response=" +
                    req.query.token,
                {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                }
            )
                .then((res) => res.json())
                .then((json) => {
                    console.log("finished captcha...");
                    if (json.success) {
                        console.log("captcha successful...");

                        client.login(discordKey);
                        client.once("ready", () => {
                            console.log(`Sending discord message to ${functions.config().discord.channel}...`);
                            client.channels.cache.get(functions.config().discord.channel).send(`
                              Received a new message via https://dynafools.live/
                              **email:** ${req.query.email}
                              **name:** ${req.query.firstName} ${req.query.lastName}
                              **Message:** ${req.query.message}
                            `);
                            return res.send({ success: true, info: json });
                        });
                    } else {
                        console.error("failed in captcha:", json);
                        return res.send({ success: false, error: "captcha" });
                    }
                });
        } else {
            return res.send({ success: false, error: "missing" });
        }
    });
});
