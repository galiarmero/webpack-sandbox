# webpack-sandbox

## Running webpack

### No configuration

If using Node 8.2 or higher, use `npx` which comes out of the box:
```
npx webpack src/index.js dist/bundle.js
```

Otherwise, just use `webpack` executable in the `bin` folder:
```
./node_modules/.bin/webpack src/index.js dist/bundle.js
```

Expected output should look not unlike this:

```
λ .\node_modules\.bin\webpack.cmd src\index.js dist\bundle.js
Hash: 0fb6b5f739b227f489c5
Version: webpack 3.10.0
Time: 372ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  544 kB       0  [emitted]  [big]  main
   [0] ./src/index.js 344 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
```

### Using a configuration

Here's what a simple configuration looks like:

**webpack.config.js**
```javascript
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

module.exports = config;
```

To run _webpack_ based on this configuration, run:
```
npx webpack
```
Or...
```
./node_modules/.bin/webpack
```
It will look for **webpack.config.js** by default. 


## Learning notes
This project contains [learning notes](./notes) that I put together as I study _webpack_.