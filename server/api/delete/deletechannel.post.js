import{deletechannel} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async (credentials) =>{
    try{
        let { channelname } = await readBody(credentials);
    //     const router = useRouter()
    // const routeURL = router.currentRoute.value.params
    // console.log(routeURL)

        if (!channelname)
        {
            console.log("channel not parsed");
            return false
        }
         const s = await deletechannel(channelname)
             return s
            } 
            catch(error){
                console.log(error)
            } 
})

