import { deletechannel } from '~~/task-manager/mongodb.js'
export default defineEventHandler(async (credentials) => {
    try {
        const router = getRouterParams(credentials)
        const c = router.id
        const s = await deletechannel(c)
        return s
    }
    catch (error) {
        console.log(error)
    }
})

