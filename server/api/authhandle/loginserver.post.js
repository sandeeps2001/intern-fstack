import { logincheck } from "~~/task-manager/mongodb.js";
import {setCookie } from 'h3'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export default defineEventHandler(async (credentials) => {
  try {
    let { e, p } = await readBody(credentials);
    const s = await logincheck(e, p);
    console.log(s, "val");
    if (!s) {
      return false;
    }
    let passcheck = bcrypt.compareSync(p, s.password)
    if (passcheck && s.email === e) {
      const token = jwt.sign({loginemail: e , isadmin: false},process.env.NUXT_PRIVATE_SECRETKEY);
             setCookie(credentials,'sessioncookie',token,{
                httpOnly:true,
                maxAge: 5 * 60 * 60,
            })
            
      console.log("password matched");
      return true
    }
    return false
  } 
  catch (error) {
    console.log(error);
  }
});
