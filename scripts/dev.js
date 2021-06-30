// 开发环境的环境变量
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// 监听被拒绝且没有收集拒绝信息的promise
process.on("unhandledRejection", err => {
    throw err;
});

require("../config/env");
