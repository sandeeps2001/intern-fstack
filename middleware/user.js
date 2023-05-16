export default defineNuxtRouteMiddleware(async(to ,from)=>{
const cookie  = await $fetch('/api/authhandle/logincookiegetter')
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