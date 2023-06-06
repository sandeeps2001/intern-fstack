import { deletechannel } from '~~/task-manager/mongodb.js'
export default defineEventHandler(async (credentials) => {
    const router = getRouterParams(credentials)
            const c = router.id
            if(!c){
                return false
            }
            else{
                return true
            }
        })
//     try {
//         const router = getRouterParams(credentials)
//         const c = router.id
//         const s = await deletechannel(c)
//         return s
//     }
//     catch (error) {
//         console.log(error)
//     }
// })

