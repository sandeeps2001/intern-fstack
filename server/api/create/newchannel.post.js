import { createchannel } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  let { c, d, e } = await readBody(credentials);
  if(c && d && e && typeof c === "string"){
    return true
  }
  else{
    return false
  }
  // try {
  //   let { c, d, e } = await readBody(credentials);
  //   if (!c || !d || !e) {
  //     console.log("enter all required values");
  //     return false;
  //   }
  //   const s = await createchannel(c, d, e);
  //   console.log(s , "fromchannelapicall")
  //   return s
  // } catch (error) {
  //   console.log(error);
  //   return false
  // }
});
// export default defineEventHandler(async (credentials) => {
//   try {
//       let { c, d, e } = await readBody(credentials);
//       if (!c || !d || !e) {
//         console.log("enter all required values");
//         return false;
//       }
//       const s = await createchannel(c, d, e);
//       console.log(s , "fromchannelapicall")
//       return s
//     } catch (error) {
//       console.log(error);
//       return false
//     }
// })

  //   let { c, d, e } = await readBody(credentials);
  //   if (!c || !d || !e) {
  //     console.log("enter all required values");
  //     return false;
  //   }
  //   const s = await createchannel(c, d, e);
  //   console.log(s , "fromchannelapicall")
  //   return s
  // } catch (error) {
  //   console.log(error);
  //   return false
  // }