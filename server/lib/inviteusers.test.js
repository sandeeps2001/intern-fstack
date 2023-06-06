import { test, expect, describe } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe('my test', async () => {
    await setup({
      server: true
    });
    test("ext", async () => {
            let channelaccess = {
              channel:{
                  A:{
                      read:true,
                      write:true,
                      del:true
                  }
              }
            }
      expect(await response).toBe(true)
    });
  })