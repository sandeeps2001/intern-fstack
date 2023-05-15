import { signuppost } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    let { e, p } = await readBody(credentials);
    if (!e || !p) {
      return false;
    }
    const InsertingCredentialsIntoDatabase = await signuppost(e, p);
    console.log(InsertingCredentialsIntoDatabase, "fromsignupAPI");
    return InsertingCredentialsIntoDatabase
    }
   catch (error) {
    console.log(error);
  }
});
