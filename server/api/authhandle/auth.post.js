import{dbc} from '~~/task-manager/mongodb.js'
import {setCookie } from 'h3'
import jwt from 'jsonwebtoken'
export default defineEventHandler (async (credentials) =>{
    try{
        // const config = useRuntimeConfig();
        // console.log(config.private.password)
        const s  = await dbc()
        let{e,p}= await readBody(credentials)
        if( s.superpassword===p && s.superemail===e){
            console.log("password matched")
            const token = jwt.sign({SAemail: e, isadmin:true}, process.env.NUXT_PRIVATE_SECRETKEY);
             setCookie(credentials,'sessioncookie',token,{
                httpOnly:true,
                maxAge: 5 * 60 * 60,
            })
        return token
            }
         }
          catch(error){
                console.log(error)
                return false
            } 
})