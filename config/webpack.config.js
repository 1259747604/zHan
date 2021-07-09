// 配置
module.exports = webpackEnv => {
    const isDevelopment = webpackEnv === "development";
    const isProduction = webpackEnv === "production";

    return {
        mode: webpackEnv
    };
};
