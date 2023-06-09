import { messagedelete } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  let {id} = await readBody(credentials);
     if (!id ) {
    return false 
    }
    return true
  })
  export default defineEventHandler(async (credentials) => {
  try {
    let {id} = await readBody(credentials);
    if (!id ) {
      console.log("messages are not parsed");
      return false;
    }
    let s = await messagedelete(id);
    return s;
  } catch (error) {
    console.log(error);
  }
});
