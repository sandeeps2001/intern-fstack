import{allchannel} from '~~/task-manager/mongodb.js'
export default defineEventHandler (async () =>{
    try{
         let s  = await allchannel()
             return s
            } 
            catch(error){
                console.log(error)
            } 
})

