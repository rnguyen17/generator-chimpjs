const fs = require('fs');
const path = require('path');

const templateConfig = require(path.resolve(
  __dirname,
  '../generators/app/templates/_package.json'
));

const baseConfig = require(path.resolve(__dirname, '../generators/app/templates/package.json'));

const finalConfig = {
  ...templateConfig,
  devDependencies: { ...baseConfig.devDependencies },
};

fs.writeFileSync(
  path.resolve(__dirname, '../generators/app/templates/_package.json'),
  JSON.stringify(finalConfig, null, 2),
  'utf-8'
);
