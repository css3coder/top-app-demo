module.exports = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: `@import "./styles/_variables.scss";`,
    },
    images: {
        domains: ['courses-top.ru']
    },
    webpack5: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });
        return config;
    }
};