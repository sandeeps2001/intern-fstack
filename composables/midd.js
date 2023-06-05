export const messapi =  async ()=>{
let {data : cook } = await useFetch('/api/create/messagecreate',{
    method: 'POST', 
    body:{
    messagedata:'hello we are testing',
    collection : 'A'
    }
    })
    return cook.value
    }
    // let router = useRouter()
    // if(!cook)
    //     router.push('/')

    // else{
    //     return cook
    // }


