import { test, expect, describe } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe('edit test', async () => {
  await setup({
    server: true
  });
test("edituserswithacs correct parameteres", async () => {
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
        const response = await $fetch("/api/edit/editusersacs", {
          method: "POST",
          body: {
            e: 'sandy4adhi@gmail.com',
            arr: arr1,
            obj: channelaccess
          },
        });
expect(await response).toBe(true)
});
test("edituserswithacs  with incorrect parameteres", async () => {
    let channelaccess = {
      channel:{
          A:{
              read:true,
              write:true,
              del:true
          }
      }
    }
        const response = await $fetch("/api/edit/editusersacs", {
          method: "POST",
          body: {
            e: 'sandy4adhi@gmail.com',
            obj: channelaccess
          },
        });
expect(await response).toBe(true)
});
test("messagecreate with parameters", async () => {
      const response = await $fetch("/api/edit/messageupdate", {
        method: "POST",
        body: {
          messagedata: 'sandy4adhi@gmail.com',
          collection: 'D',
        },
      });
expect(await response).toBe(true)
});
test("messagecreate without parameters", async () => {
  const response = await $fetch("/api/edit/messageupdate", {
    method: "POST",
    body: {
      messagedata: null
    },
  });
expect(await response).toBe(false)
})
})