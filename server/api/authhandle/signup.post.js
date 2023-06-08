import { signuppost } from "~~/task-manager/mongodb.js";
import bcrypt from 'bcrypt'
export default defineEventHandler(async (credentials) => {
  let { e, p } = await readBody(credentials);
     if (!e || !p) {
       return false;
     }
     const saltRounds = 10;
     const myPlaintextPassword = p ;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
     if(hash){
      return true
     }
//   try {
// const saltRounds = 10;

//     let { e, p } = await readBody(credentials);
//     if (!e || !p) {
//       return false;
//     }
// const myPlaintextPassword = p ;
// const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(myPlaintextPassword, salt);
// console.log(hash , "hashedpassword")
// const InsertingCredentialsIntoDatabase = await signuppost(e, hash);
// console.log(InsertingCredentialsIntoDatabase, "fromsignupAPI");
// return InsertingCredentialsIntoDatabase
// }
//    catch (error) {
//     console.log(error);
//   }
});
