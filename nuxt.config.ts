import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

      runtimeConfig: {
       
        public: {
          dbUser: ""
        },
        private:{
          password: ""
        }
      }
    })
      
