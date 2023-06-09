import { fetchchannelacs } from '~~/task-manager/mongodb.js'
export default defineEventHandler(async (credentials) => {
    let { cname, gmail } = await readBody(credentials)
        if (!gmail || cname) {
            console.log("email not parsed");
            return false
        }
        else{
            return true
        }
        
        
export default defineEventHandler(async (credentials) => {
    try {
        let { cname, gmail } = await readBody(credentials)
        if (!gmail) {
            console.log("email not parsed");
            return false
        }

        let s = await fetchchannelacs(cname, gmail)
        console.log(s)
        return s
    }
    catch (error) {
        return false
    }
})
