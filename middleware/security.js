export default defineNuxtRouteMiddleware((to,from)=>{
    const state = isauthenticated()
    console.log(state.value)
    if(state.value === true){
      navigateTo(to.fullPath)
    }
    navigateTo('/')
})

