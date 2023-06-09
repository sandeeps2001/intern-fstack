import { messageupdate } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  if (!id || !newvalue) {
          console.log("messages are not parsed");
          return false;
  }
  else{
    return true
  }
})
export default defineEventHandler(async (credentials) => {
  try {
    let { id, newvalue } = await readBody(credentials);
    if (!id || !newvalue) {
      console.log("messages are not parsed");
      return false;
    }
    let s = await messageupdate(id, newvalue);
    return s;
  } catch (error) {
    console.log(error);
  }
});
