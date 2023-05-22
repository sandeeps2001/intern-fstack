import {getCookie } from 'h3'
import jwt from 'jsonwebtoken'
import { messagecreatembd } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    let { messagedata, collection } = await readBody(credentials);
    console.log(messagedata);
    if (!messagedata || !collection) {
      console.log("message and collection are not parsed");
      return false;
    }
    let Usergmail
    const token =  getCookie(credentials,'sessioncookie')
    const cookie =  jwt.verify(token,process.env.NUXT_PRIVATE_SECRETKEY);
       if(cookie.loginemail){
      Usergmail = cookie.loginemail
       }
    let s = await messagecreatembd(messagedata, collection , Usergmail);
    return s;
    
  } catch (error) {
    console.log(error);
  }
});
