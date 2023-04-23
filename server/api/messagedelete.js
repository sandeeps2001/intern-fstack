import{messagedelete} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async (credentials) =>{
    try{
        let{value , collection}= await readBody(credentials)

        if (!value || !collection)
        {
            console.log("messages are not parsed");
            return false
        }
         let s  = await messagedelete(value, collection)
             return s
            } 
            catch(error){
                console.log(error)
            } 
})

