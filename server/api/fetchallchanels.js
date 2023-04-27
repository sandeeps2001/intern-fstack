import { allchannelnames } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    let { e } = await readBody(credentials);
    if (!e) {
      console.log("email not parsed");
      return false;
    }
    var s = [];
    s = await allchannelnames();
    return s;
  } catch (error) {
    console.log(error);
  }
});
