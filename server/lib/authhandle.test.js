import { test, expect, describe } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe('authhandle test', async () => {
  await setup({
    server: true
  });
  test("auth", async () => {
    const response = await $fetch("/api/authhandle/auth", {
      method: "POST",
      body: {
        e: 'sandy4adhi@gmail.com',
        p:'1234'
      },
    })
    expect(await response).toBe(true)
})
test("cookiegetter", async () => {
    const response = await $fetch("/api/authhandle/cookiegetter", {
      method: "GET",
    })
    expect(await response).toBe(true)
})
test("logincookiegetter", async () => {
    const response = await $fetch("/api/authhandle/logincookiegetter", {
      method: "GET",
    })
    expect(await response).toBe(true)
})
test("loginserver hitting with signedup account", async () => {
    const response = await $fetch("/api/authhandle/loginserver", {
      method: "POST",
      body:{
        e:'sandy4adhi@gmail.com',
        p:'1234',
        flag : true
      }
    })
    expect(await response).toBe(true)
})
test("loginserver hitting without signedup account", async () => {
    const response = await $fetch("/api/authhandle/loginserver", {
      method: "POST",
      body:{
        e:'sandy4adhi@gmail.com',
        p:'1234',
        flag : false
      }
    })
    expect(await response).toBe('please complete signup and comeback')
})
test("logout", async () => {
    const response = await $fetch("/api/authhandle/logout", {
      method: "GET",
    })
    expect(await response).toBe(true)
})
test("logoutsuperadmin", async () => {
    const response = await $fetch("/api/authhandle/logoutsuperadmin", {
      method: "GET",
    })
    expect(await response).toBe(true)
})
test("signup with crt parameters", async () => {
    const response = await $fetch("/api/authhandle/signup", {
      method: "POST",
      body:{
        e:'sandy4adhi@gmail.com',
        p:'1234',
      }
    })
    expect(await response).toBe(true)
})
test("signup without crt parameters", async () => {
    const response = await $fetch("/api/authhandle/signup", {
      method: "POST",
      body:{
        e:'sandy4adhi@gmail.com',
      }
    })
    expect(await response).toBe(false)
})
})