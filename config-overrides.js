// 按需加载 antd 的模块
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );
  return config;
};
