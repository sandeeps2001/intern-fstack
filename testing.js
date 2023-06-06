let channelaccess = {
    channel:{}
 }
 channelaccess.channel['A'] = {
    read : false,
    write: false,
    del :  false
}
console.log(channelaccess)
let channelaccess = {
    channel:{
        A:{
            read:true,
            write:true,
            del:true
        }
    }
}