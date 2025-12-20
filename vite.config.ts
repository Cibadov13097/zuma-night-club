import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine base path based on deployment platform
  // Vercel uses "/", GitHub Pages uses "/zuma-night-club/"
  // Vercel automatically sets VERCEL=1 environment variable
  const isVercel = process.env.VERCEL === "1";
  const basePath = process.env.VITE_BASE_PATH || 
    (isVercel ? "/" : (mode === "production" ? "/zuma-night-club/" : "/"));
  
  return {
    base: basePath,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  };
});
