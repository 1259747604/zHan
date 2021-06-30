// 开发环境的环境变量
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// 监听被拒绝且没有收集拒绝信息的promise
process.on("unhandledRejection", err => {
    throw err;
});

require("../config/env");

const chalk = require("../tt-dev-utils/chalk");
const paths = require("../config/paths");
const checkRequiredFiles = require("../tt-dev-utils/checkRequiredFiles");

// 检查必须文件
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
}

// 默认host和port
const HOST = process.env.HOST || "0.0.0.0";
const DEFAULT_PORT = parseInt(process.env.PORT) || 3000;

console.log("🚀 ~ file: dev.js ~ line 11 ~ env", process.env.Host);
console.log(chalk.cyan("Hello", "World!", "Foo", "bar", "biz", "baz"));
