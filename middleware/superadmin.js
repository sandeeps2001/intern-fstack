export default defineNuxtRouteMiddleware(async(to,from)=>{
    const cookie  = await $fetch('/api/authhandle/cookiegetter')
    console.log(cookie && cookie.isadmin && to.fullPath != from.fullPath , "from middleware") 

    if(cookie && cookie.isadmin){
       return 
    
     }
     else{
        return navigateTo('/')
     }
    })