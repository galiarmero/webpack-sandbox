# Output

This part of the configuration tells _webpack_ to write the compiled files to a disk. Though there can be multiple entry points, there can be only one **output** configuration defined.

An **output** is configured with two things:
* `filename` of output file(s)
* `path` to the output directory

## Single Entry Point

```javascript
const config = {
    output: {
        filename: 'bundle.js',
        path: '/home/proj/public/assets'
    }
};

module.exports = config;
```

## Multiple Entry Points

If the configuration creates more than one _chunk_, *substitutions* are used so that file names are unique.

```js
{
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}
```