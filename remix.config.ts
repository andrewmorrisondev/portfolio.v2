import type { AppConfig } from "@remix-run/dev";

const config: AppConfig = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "vercel", // Updated for Vercel
  ignoredRouteFiles: ["**/.*"],
};

export default config;
