import { projects } from "./project/[id]";

export default defineEventHandler((event) => {
  return projects;
});
