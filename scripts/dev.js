// 开发环境的环境变量
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// 监听被拒绝且没有收集拒绝信息的promise
process.on("unhandledRejection", err => {
    throw err;
});

require("../config/env");

const chalk = require("t-devtools/chalk");
const paths = require("../config/paths");
const checkRequiredFiles = require("t-devtools/checkRequiredFiles");
const { choosePort } = require("t-devtools/WebpackDevServerUtils");

// 检查必须文件
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
}

// 默认host和port
const HOST = process.env.HOST || "0.0.0.0";
const DEFAULT_PORT = parseInt(process.env.PORT) || 3000;

const { checkBrowsers } = require("t-devtools/browsersHelper");
let isInteractive = process.stdout.isTTY;

checkBrowsers(paths.appPath, isInteractive)
    .then(() => {
        return choosePort(HOST, DEFAULT_PORT);
    })
    .then(port => {
        console.log("🚀 ~ file: dev.js ~ line 34 ~ port", port);
    })
    .catch(err => {
        if (err && err.message) {
            console.log(chalk.redBright(err.message));
        }
        process.exit(1);
    });

console.log("🚀 ~ file: dev.js ~ line 11 ~ env", process.env.Host);
