//let res
// const call = async()=>{
// const response = await $fetch("/api/create/channelmsg", {
//   method: "POST",
//   body: {
//     cname: 'B',
//   },
// })
// return response
// }
import { test, expect, describe } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe('create test', async () => {
  await setup({
    server: true
  });
  test("channelmsg", async () => {
    const response = await $fetch("/api/create/channelmsg", {
      method: "POST",
      body: {
        cname: 'B',
      },
    });
    expect(await response).toBe(true)
  });
  test("inviteuserswithacs", async () => {
    let channelaccess = {
      channel:{
          A:{
              read:true,
              write:true,
              del:true
          }
      }
    }
    let arr1 = ['A','B','C']
        const response = await $fetch("/api/create/inviteuserswithacs", {
          method: "POST",
          body: {
            e: 'sandy4adhi@gmail.com',
            arr: arr1,
            obj: channelaccess
          },
        });
expect(await response).toBe(true)
});
test("messagecreate with parameters", async () => {
      const response = await $fetch("/api/create/inviteuserswithacs", {
        method: "POST",
        body: {
          messagedata: 'sandy4adhi@gmail.com',
          collection: 'D',
        },
      });
expect(await response).toBe(true)
});
test("messagecreate without parameters", async () => {
  const response = await $fetch("/api/create/inviteuserswithacs", {
    method: "POST",
    body: {
      messagedata: null
    },
  });
expect(await response).toBe(false)
});
test("newchannel with crt parameters", async () => {
  const response = await $fetch("/api/create/inviteuserswithacs", {
    method: "POST",
    body: {
      c: 'L',
      d:'15th june',
      e: 'sandy4adhi@gmail.com'
    },
  });
expect(await response).toBe(true)
});
test("newchannel without crt parameters", async () => {
  const response = await $fetch("/api/create/inviteuserswithacs", {
    method: "POST",
    body: {
      c: 1234,
      d:'15th june',
      e: 'sandy4adhi@gmail.com'
    },
  });
expect(await response).toBe(false)
});
})
  // describe('myest', async () => {
  //   await setup({
  //     server: true
  //   });
  //   test("ext", async () => {
  //     let channelaccess = {
  //       channel:{
  //           A:{
  //               read:true,
  //               write:true,
  //               del:true
  //           }
  //       }
  //   }
  //   let arr1 = ['A','B','C']
  //     const response = await $fetch("/api/create/inviteuserswithacs", {
  //       method: "POST",
  //       body: {
  //         e: 'sandy4adhi@gmail.com',
  //         arr: arr1,
  //         obj: channelaccess
  //       },
  //     });
  //     expect(await response.json()).toBe(true)
  //   });
  // });
  



//   import { describe, test,expect } from 'vitest'
// import { setup, fetch } from '@nuxt/test-utils'

// describe('My test', async () => {
//     await setup({
//         server: true
//     })

//     test('my test', async() => {
//         const res=await fetch('/api/start')
//         expect(await res.json()).toBe(true)
//     })
// })