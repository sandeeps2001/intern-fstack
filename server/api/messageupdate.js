import { messageupdate } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    let { oldvalue, newvalue, collection } = await readBody(credentials);
    console.log(oldvalue);
    if (!oldvalue || !newvalue) {
      console.log("messages are not parsed");
      return false;
    }
    let s = await messageupdate(oldvalue, newvalue, collection);
    return s;
  } catch (error) {
    console.log(error);
  }
});
