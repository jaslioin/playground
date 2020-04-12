const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["~"] = path.resolve(__dirname); //root
    return config;
  },
  env: {
    CONTENTFUL_SPACE: "0ypqr78zxd2e",
    CONTENTFUL_TOKEN: "biDQirw96Pz7J4Z5WhWmQeJGClDM7guThtZyAnYdH_s",
  },
};
