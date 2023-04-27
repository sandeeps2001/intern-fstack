import { createchannel } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    let { c, d, e } = await readBody(credentials);
    if (!c || !d || !e) {
      console.log("enter all required values");
      return false;
    }
    const s = await createchannel(c, d, e);
    console.log(s, "val");
    if (s === true) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
});
