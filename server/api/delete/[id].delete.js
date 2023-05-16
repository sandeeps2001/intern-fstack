import{deletechannel} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async (credentials) =>{
    try{
        const router = getRouterParams(credentials)
        const c = router.id 
        if (!channelname)
        {
            console.log("channel not parsed");
            return false
        }
         const s = await deletechannel(c)
             return s
            } 
            catch(error){
                console.log(error)
            } 
})

