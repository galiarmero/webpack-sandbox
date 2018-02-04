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

**Answer**: 'css-loader' interprets `@import` and `url()` like `import/require()`. They will resolve whatever is imported using the configured loader for that specific file. In the examples above, the configured loader for images is `file-loader`. Thus, `background: url(../images/webpack-logo.svg)` was resolved using `file-loader`.

## Loading Fonts

For fonts, it works pretty much the same with images in that `file-loader` is also used.

First, add the filters for font files and use `file-loader` to load them in **webpack.config.js**:
```js
{
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
        'file-loader'
    ]
}
```

Then, define a font using `@font-family` in the css file. We can then use this font to format elements using `font-family` property.

```css
@font-face {
    font-family: 'BUTiger';
    src: url('../fonts/BU Tiger Claw.otf');
    font-weight: 600;
}

.hello {
    color: red;
    background: url(../images/webpack-logo.svg);
    font-family: 'BUTiger';
}
```

As it was with the image, the `url()` directive for this font was resolved using `file-loader`. After `file-loader` processes the font and spews it to the `output` folder, the `url()` will be resolved to the final url of the font (some hash value in our case). And that's it.

## Other loaders

There are a ton of other built-in **loaders**. For XML files, there is `xml-loader`. For CSV/TSV files, there's `csv-loader`. 

JSON-format files, meanwhile, are naturally supported by _webpack_. This piece of import will work without defining any loader for JSON files:

```js
import Data from './data.json';
```


## Learning notes
This project contains [learning notes](./notes) put together while studying _webpack_.