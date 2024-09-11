import type { AppConfig } from "@remix-run/dev";

const config: AppConfig = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js", // Adjusted from serverBuildDirectory
  ignoredRouteFiles: ["**/.*"],
};

export default config;
