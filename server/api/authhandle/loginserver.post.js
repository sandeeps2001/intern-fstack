import { logincheck } from "~~/task-manager/mongodb.js";
import { setCookie } from 'h3'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export default defineEventHandler(async (credentials) => {

  let { e, p , flag} = await readBody(credentials);
  if(!e||!p){
    return false
  }
  if (flag == false){
    return 'please complete signup and comeback'
  }
  else
  // try {
  //   let { e, p } = await readBody(credentials);
  //   const s = await logincheck(e, p);
  //   if (s === 'please complete signup and comeback') {
  //     return s
  //   }
  //   console.log(s, "val");
  //   if (!s) {
  //     return false;
  //   }
  //   let passcheck = bcrypt.compareSync(p, s.password)
  //   console.log(passcheck, 'from login')
  //   if (passcheck && s.email === e) {
  //     const token = jwt.sign({ loginemail: e, isadmin: false }, process.env.VITE_SECRETKEY);
  //     setCookie(credentials, 'sessioncookie', token, {
  //       httpOnly: true,
  //       maxAge: 5 * 60 * 60,
  //     })

  //     console.log("password matched");
  //     return true
  //   }
  //   return false
  // }
  // catch (error) {
  //   console.log(error);
  // }
});
