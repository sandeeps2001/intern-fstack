import {setCookie } from 'h3'
import jwt from 'jsonwebtoken'
export default defineEventHandler(async (credentials) => {
  try {
    setCookie(credentials,'sessioncookie','')
      return true
    }
   
  catch (error) {
    console.log(error);
    return false
  }
});
