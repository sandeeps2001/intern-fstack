import { fetchchannel } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    let { e } = await readBody(credentials);
    if (!e) {
      console.log("email not parsed");
      return false;
    }
    let s = await fetchchannel(e);
    return s;
  } catch (error) {
    console.log(error);
  }
});
