import{deletechannel} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async (credentials) =>{
    try{
        let{channel}= await readBody(credentials)
        console.log(channel)
        if (!channel)
        {
            console.log("channel not parsed");
            return false
        }
         let s  = await deletechannel(channel)
             return true
            } 
            catch(error){
                console.log(error)
            } 
})

