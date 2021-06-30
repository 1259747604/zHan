const fs = require("fs");
const path = require("path");
const paths = require("./paths");

// 清除paths缓存
delete require.cache[require.resolve("./paths")];

const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
    throw new Error("NODE_ENV是必须参数");
}

// 允许配置环境变量的文件
const dotenvFiles = [`${paths.dotenv}.${NODE_ENV}`, paths.dotenv];

// 添加至process.env
dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
        require("dotenv-expand")(
            require("dotenv").config({
                path: dotenvFile
            })
        );
    }
});
