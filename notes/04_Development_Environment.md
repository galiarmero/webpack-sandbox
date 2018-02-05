# Development Environment

_webpack_ provides development tooling to make things easier.

## Source maps

_webpack_-bundled source code might be difficult to debug in case of errors and warnings. If an error occurs in, say, module `print` which is used by `index.js`, the stack trace will just point to `bundle.js`. It will be a hassle to find which module actually causes errors.

The solution to this are *source maps*, which are files that maps the compiled code back to the original source code. *Source maps* helps the browser identify these mappings. If an error occurred in `print`, the browser tells us exactly that through the help of source maps. There are many ways to configure source maps through the [*devtool*](https://webpack.js.org/configuration/devtool/) option.

As an example, let's use `inline-source-map`.

**webpack.config.js**
```js
const config = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
        
    },
    devtool: 'inline-source-map',
```

**print.js** (notice `consul`)
```js
export default function printMe()
{
   consul.log('I get called from print.js');
}
``` 

Let's run `npm run build`.

If we click the button, which triggers a call to `printMe`, the browser will correctly point use to the module where the error occurred:

```
print.js:3 Uncaught ReferenceError: consul is not defined
    at HTMLButtonElement.printMe (print.js:3)
printMe @ print.js:3
```