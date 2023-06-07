import { test, expect, describe } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe('delete test', async () => {
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
  test("messagedeletepost", async () => {
    chname = 'L'
    const response = await $fetch(`/api/delete/messagedelete`, {
      method: "DELETE",
    });
    expect(await response).toBe(true)
  });
})