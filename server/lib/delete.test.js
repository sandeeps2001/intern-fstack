import { test, expect, describe } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe('my test', async () => {
  await setup({
    server: true
  });
  test("[id]delete", async () => {
    chname = 'L'
    const response = await $fetch(`/api/delete/${chname}`, {
      method: "DELETE",
    });
    expect(await response).toBe(true)
  });
})