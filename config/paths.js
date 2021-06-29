const path = require("path");
const fs = require("fs");
const url = require("url");

// 获取项目路径
const appDirectory = fs.realpathSync(process.cwd());

// 路径合并
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = ["js", "ts", "tsx", "json", "jsx"];

// 解析模块路径并加上扩展名
const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find(extension => fs.existsSync(resolveFn(`${filePath}.${extension}`)));
    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }
    return resolveFn(`${filePath}.js`);
};

module.exports = {
    dotenv: resolveApp(".env"),
    appPath: resolveApp("."),
    appBuild: resolveApp("dist"),
    appPublic: resolveApp("public"),
    appHtml: resolveApp("public/index.html"),
    appIndexJs: resolveModule(resolveApp, "src/index"),
    appPackageJson: resolveApp("package.json"),
    appSrc: resolveApp("src"),
    appTsConfig: resolveApp("tsconfig.json"),
    appJsConfig: resolveApp("jsconfig.json"),
    yarnLockFile: resolveApp("yarn.lock"),
    appNodeModules: resolveApp("node_modules")
};
