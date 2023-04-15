import{logincheck} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async (credentials) =>{
    try{
        let{e,p}= await readBody(credentials)
        const s  = await logincheck(e,p)
        console.log(s,'val')
        if (!s){
            return false
        }
        if( s.password===p && s.email===e){
            console.log("password matched")
            return true
                }
                console.log("false")
                return false
            } catch(error){
                console.log(error)
            } 
})

