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
  
  // Priority: VITE_BASE_PATH env var > Vercel check > production default
  let basePath = process.env.VITE_BASE_PATH;
  
  if (!basePath) {
    if (isVercel) {
      basePath = "/";
    } else if (mode === "production") {
      basePath = "/zuma-night-club/";
    } else {
      basePath = "/";
    }
  }
  
  // Ensure base path ends with /
  if (!basePath.endsWith("/")) {
    basePath = basePath + "/";
  }
  
  return {
    base: basePath,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      // HTML transform plugin to add base tag
      {
        name: "html-transform",
        transformIndexHtml(html) {
          // Only add base tag in production for GitHub Pages
          if (mode === "production" && basePath !== "/") {
            return html.replace(
              "<head>",
              `<head>\n    <base href="${basePath}">`
            );
          }
          return html;
        },
      },
    ].filter(Boolean),
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
