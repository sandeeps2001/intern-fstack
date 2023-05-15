// export default defineNuxtRouteMiddleware(async(to)=>{
//     const cookie  = await $fetch('/api/superadminget/cookiegetter')
//      if(cookie && cookie.isadmin){
//         navigateTo(to)
//      }
//      else{
//         navigateTo('/login')
//      }
//     })