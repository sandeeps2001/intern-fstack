import { test, expect, describe } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe('create test', async () => {
  await setup({
    server: true
  });
  test("accesschannel", async () => {
    const response = await $fetch("/api/fetch/accesschannel", {
      method: "POST",
      body: {
        cname: 'B',
        gmail:'sandy4adhi@gmail.com'
      },
    });
    expect(await response).toBe(true)
  });
  test("allchannels", async () => {
    const response = await $fetch("/api/fetch/allchannels", {
      method: "GET"
    });
    expect(await response).toBe(true)
  });
  test("allmails", async () => {
    const response = await $fetch("/api/fetch/allmails", {
      method: "GET"
    });
    expect(await response).toBe(true)
  });
  test("fetchallchannels", async () => {
    const response = await $fetch("/api/fetch/fetchallchannels", {
    });
    expect(await response).toBe(true)
  });
  test("fetchchannels", async () => {
    const response = await $fetch("/api/fetch/fetchchannels", {
    });
    expect(await response).toBe(true)
  });
})