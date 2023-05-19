import {getCookie } from 'h3'
import jwt from 'jsonwebtoken'
import{fetchchannelmessage} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async (credentials) =>{
    try{
        let{cname}= await readBody(credentials)
        console.log(cname)
        if (!cname)
        {
            console.log("channel not parsed");
            return false
        }
        const token =  getCookie(credentials,'sessioncookie')
        console.log(token)
        const data =  jwt.verify(token,process.env.NUXT_PRIVATE_SECRETKEY);
        const email = data.loginemail
        console.log(data , "from channelmsg api call")
         let s  = await fetchchannelmessage(cname , email)
             return s
            } 
            catch(error){
                console.log(error)
            } 
})

