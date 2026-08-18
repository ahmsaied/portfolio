import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Framer Motion — heavy animation library, separate chunk
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-framer";
          }
          // Radix UI primitives — separate chunk
          if (id.includes("node_modules/@radix-ui")) {
            return "vendor-radix";
          }
          // Icon packs — large, rarely change
          if (
            id.includes("node_modules/lucide-react") ||
            id.includes("node_modules/@icons-pack")
          ) {
            return "vendor-icons";
          }
          // Charts — optional heavy lib
          if (id.includes("node_modules/recharts")) {
            return "vendor-charts";
          }
          // React Query
          if (id.includes("node_modules/@tanstack")) {
            return "vendor-query";
          }
          // React core + all other node_modules → single vendor chunk
          // (avoids circular dependency from separating react)
          if (id.includes("node_modules/")) {
            return "vendor";
          }
        },
      },
    },
  },
}));

