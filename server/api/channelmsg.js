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
         let s  = await fetchchannelmessage(cname)
             return s
            } 
            catch(error){
                console.log(error)
            } 
})

