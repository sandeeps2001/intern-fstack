import { allchannelnames } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async () => {
  try {
    var s = [];
    s = await allchannelnames();
    return s;
  } catch (error) {
    console.log(error);
  }
});
