import { allchannelnames } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    var s = [];
    s = await allchannelnames();
    return s;
  } catch (error) {
    console.log(error);
  }
});
