import { setCookie } from 'h3'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export default defineEventHandler(async (credentials) => {
    const password = "$2b$10$mxtU2nERZUcSvRb9273zueKWOK4e384BSJxVbvXgPkQz/4nLPQ2tG"
        const email = 'sandy4adhi@gmail.com'
        let { e, p } = await readBody(credentials)
        if(!e||!p){
            return false
        }
        let hashedcheck = bcrypt.compareSync(p, password)
        if (hashedcheck && email === e) {
        return true
        }
        else {
          return false
        }
    })
    // try {
    //     // const config = useRuntimeConfig();
    //     // console.log(config.private.password)
    //     const password = "$2b$10$mxtU2nERZUcSvRb9273zueKWOK4e384BSJxVbvXgPkQz/4nLPQ2tG"
    //     const email = 'sandy4adhi@gmail.com'
    //     let { e, p } = await readBody(credentials)
    //     let hashedcheck = bcrypt.compareSync(p, password)
    //     if (hashedcheck && email === e) {
    //         console.log("password matched")
    //         const token = jwt.sign({ SAemail: e, isadmin: true }, process.env.VITE_SECRETKEY);
    //         setCookie(credentials, 'sessioncookie', token, {
    //             httpOnly: true,
    //             maxAge: 5 * 60 * 60,
    //         })
    //         return token
    //     }
    // }
    // catch (error) {
    //     console.log(error)
    //     return false
    // }