import{signuppost} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async (credentials) =>{
    try{
        let{e,p}= await readBody(credentials)
        if (!e || !p){
            return false
        }
        const s  = await signuppost(e,p)
        console.log(s,'val')
        if( s === true){
            return true
                }
                else{
                    
                }
            } catch(error){
                console.log(error)
            } 
})