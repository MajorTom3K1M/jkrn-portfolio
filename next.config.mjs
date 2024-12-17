/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
    webpack: (config, { isServer }) => {
        config.resolve.alias['@'] = path.join(__dirname);
        return config;
    },
};

export default nextConfig;
