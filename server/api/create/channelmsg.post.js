// import { getCookie } from 'h3'
// import jwt from 'jsonwebtoken'
// import { fetchchannelmessage } from '~~/task-manager/mongodb.js'
// export default defineEventHandler(async (credentials) => {
//     try {
//         let { cname } = await readBody(credentials)
//         console.log(cname)
//         if (!cname) {
//             console.log("channel not parsed");
//             return false
//         }
//         // const token = getCookie(credentials, 'sessioncookie')
//         // console.log(token)
//         // const data = jwt.verify(token, 'yosandy123');
//         // const email = data.loginemail
//         // console.log(data, "from channelmsg api call")
//         // if (!email) {
//         //     return false
//         // }
//         // let s = await fetchchannelmessage(cname, email)
//         // return s
//         return true
//     }
//     catch (error) {
//         console.log(error)
//     }
// })

// let { cname } = await readBody(credentials)
// console.log(cname)
// if (!cname) {
//     console.log("channel not parsed");
//     return false
// }
export default defineEventHandler(async (credentials) => {
try{
    let { cname , email } = await readBody(credentials)
        if (!cname) {
            console.log("channel not parsed");
            return false
        }
let s = await fetchchannelmessage(cname, email)
return s
}
catch(error){
console.log(error)
}
})
