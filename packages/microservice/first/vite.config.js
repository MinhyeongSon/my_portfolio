import {defineConfig} from "vite";

export default defineConfig ({
    build : {
      lib :{
        entry:'./src/comp/index.ts',
        name:'first',
      }
    }

})
