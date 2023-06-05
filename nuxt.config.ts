import { defineNuxtConfig } from "nuxt/config";
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Other Nuxt.js configuration options

  server: {
    host: 'localhost', // or your desired host
    port: 3000, // or your desired port
  },
};
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

      runtimeConfig: {
       
        public: {
          dbUser: ""
        },
        private:{
          password: ""
        }
      },
     
    })
  
    
    
    
    
    
    
    
      
