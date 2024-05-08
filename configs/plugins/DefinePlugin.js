const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

module.exports = (env) => {
  const currentPath = path.join(__dirname, '/../..');
  const basePath = currentPath + '/.env';
  const envPath = basePath + '.' + env;
  const fileEnv = dotenv.config({ path: envPath }).parsed;
  
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return new webpack.DefinePlugin(envKeys)
  };
