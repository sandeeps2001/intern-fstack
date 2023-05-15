import {setCookie } from 'h3'
import jwt from 'jsonwebtoken'
export default defineEventHandler(async (credentials) => {
  try {
    setCookie(credentials,'loginsession','')
      return true
    }
   
  catch (error) {
    console.log(error);
    return false
  }
});
