import{allmails} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async () =>{
    try{
         let s  = await allmails()
             return s
            } 
            catch(error){
                console.log(error)
            } 
})

