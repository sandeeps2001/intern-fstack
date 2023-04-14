import{dbc} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async (credentials) =>{
    try{
        const s  = await dbc()
        console.log(s,'val')
        let{e,p}= await readBody(credentials)
        console.log(s.password)
        console.log(s.email)
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