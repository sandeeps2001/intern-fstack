export default defineNuxtRouteMiddleware(async(to ,from)=>{
    if(process.server){
        return
    }
    const cookie  = await $fetch('/api/authhandle/logincookiegetter')
    // if(from.fullPath === to.fullPath ){
    //     return
    // }

console.log(cookie , "from middleware")
if(cookie){
return 
}
else{
    return navigateTo('/login')
}
//  if(cookie){
    // navigateTo()
//  }
//  else{
  
//  }
})