const path = require('path');

const nextConfig = {
    webpack: (config, { isServer }) => {
        config.resolve.alias['@'] = path.join(__dirname);
        return config;
    },
};

module.exports = nextConfig;
