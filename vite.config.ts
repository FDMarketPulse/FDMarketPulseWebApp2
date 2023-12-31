import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { defineConfig, loadEnv } from 'vite';

// dotenvExpand(dotenv.config());

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        lessOptions: {
          paths: [resolve(__dirname, "node_modules")],
        },
        modifyVars: {
          // "@disabled-color": "black"
        },
      },
    },
    modules: {
      localsConvention: "camelCase",
    },
  },
  plugins: [react()],
});
