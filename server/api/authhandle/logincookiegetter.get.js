
import {getCookie } from 'h3'
import jwt from 'jsonwebtoken'
export default defineEventHandler((event) => {
  try{
    // const cookies = parseCookies(event)
    // return { cookies }
    const token =  getCookie(event,'sessioncookie')
    console.log(token)
    const data =  jwt.verify(token,process.env.NUXT_PRIVATE_SECRETKEY);
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