export default async ()=>{
let {data : cook } = await useFetch('/api/cookiegetter',{
    method: 'GET', 
    })
    if(cook.value){
    return true
    }
    else{
        return false
    }
    // let router = useRouter()
    // if(!cook)
    //     router.push('/')

    // else{
    //     return cook
    // }
}

