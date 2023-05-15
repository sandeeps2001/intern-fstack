import { messagecreatembd } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    let { messagedata, collection } = await readBody(credentials);
    console.log(messagedata);
    if (!messagedata || !collection) {
      console.log("message and collection are not parsed");
      return false;
    }
    let s = await messagecreatembd(messagedata, collection);
    return s;
  } catch (error) {
    console.log(error);
  }
});
