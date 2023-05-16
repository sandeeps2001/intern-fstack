export default defineNuxtRouteMiddleware(async(to,from)=>{
    if(process.server){
        return
    }
    const cookie  = await $fetch('/api/authhandle/cookiegetter') 
    //  if(from.fullPath === to.fullPath){
    //      return
    //  }
   console.log(cookie , "superadminmiddleware")
    if(cookie && cookie.isadmin){
       return 
    
     }
     else{
        return navigateTo('/')
     }
    })