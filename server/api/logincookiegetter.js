
import {getCookie } from 'h3'
import jwt from 'jsonwebtoken'
export default defineEventHandler((event) => {
  try{
    // const cookies = parseCookies(event)
    // return { cookies }
    const token =  getCookie(event,'loginsession')
    console.log(token)
    const data =  jwt.verify(token,"YOUR_SECRET_KEY");
    console.log(data)
    if(data){
    return data
    }
    else{
      return false
    }
  }
  catch(e){
    return false
  }
  })