import { fetchchannel } from "~~/task-manager/mongodb.js";
import { getCookie } from 'h3'
import jwt from 'jsonwebtoken'
export default defineEventHandler(async (event) => {
  return true
  // try {
  //   let Usergmail
  //   const token = getCookie(event, 'sessioncookie')
  //   const cookie = jwt.verify(token, process.env.VITE_SECRETKEY);
  //   if (cookie.loginemail) {
  //     Usergmail = cookie.loginemail
  //   }
  //   if (!Usergmail) {
  //     console.log("email not matching");
  //     return false;
  //   }
  //   let s = await fetchchannel(Usergmail);
  //   return s;
  // } catch (error) {
  //   console.log(error);
  // }
});
