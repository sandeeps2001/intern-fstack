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
import { setup, fetch } from "@nuxt/test-utils";

describe('my test', async() => {
    await setup({
      server: true  
    });
  test("example test", async () => {
    const response = await fetch("/api/create/channelmsg", {
      method: "POST",
      body: {
        cname: 'B',
      },
    });
    expect(response).toBe(true)
  });
});




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