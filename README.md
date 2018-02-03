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


## Loading CSS
`style-loader` combined with `css-loader` should be added as **loaders** in configuration.
```
npm install --save-dev style-loader css-loader
```

**webpack.config.js**
```js
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
```

When a css file is imported to a module, a `<style>` tag containing the css file will automatically be added to the `<head>` tag of any HTML file that uses a bundle containing the module.

```js
import './style.css';
```

## Loading Images

For images, meanwhile, we use `file-loader`.
```
npm install --save-dev file-loader
```

Configuration would look like this:

```js
{
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader'
    ]
}
```

What this does is everytime an image is imported, it will be processed and added to the `output` directory. Below, `Logo` will contain the resolved final url of the processed image (it will have a hash filename). 

```js
import Logo from '../images/webpack-logo.svg';
```

`css-loader` also resolves any `@import` or `url()` to the final url of the processed file. So this css:

```css
.hello {
    color: red;
    background: url(../images/webpack-logo.svg)
}
```
will resolve to this:
```css
.hello {
    color: red;
    background: url(2baa77d6015e6de6adf1ffa247530568.svg)
}
```

**TODO (seek for answers):** How does `css-loader` and `file-loader` work together to have the same final url of the processed image? Who does the processing? How does the other know of the final url?

## Learning notes
This project contains [learning notes](./notes) put together while studying _webpack_.