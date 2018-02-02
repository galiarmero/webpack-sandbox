# Entry Points

There are multiple ways to configure **Entry Points**.
* [Single Entry Syntax](#single-entry-syntax)

## Single Entry Syntax

```javascript
const config = {
    entry: './path/to/entry_file.js'
}
module.exports = config;
```

This is shorthand for:

```javascript
const config = {
    entry: {
        main: './path/to/entry_file.js'
    }
}
```

This is a quick way to setup an application with only one entry point, albeit not very flexible when scaled.

An array of file paths can also be passed in `entry` field. This is a _multi-main entry_ configuration.

## Object Syntax

```javascript
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
};
```

The properties inside `entry` are arbitrary entry chunk names. This is the most scalable way to define entries.


## Real-world Scenarios

### Multi-Page App

```javascript
const config = {
    entry: {
        homePage: './src/home.js',
        aboutPage: './src/about.js',
        blogPage: './src/blog.js'
    }
};
```

Here, we are telling webpack to create 3 separate dependency graphs.

In a multi-page application, the server will render a new HTML document. When a page reloads, its assets are downloaded. This setup opens an opportunity to separate the assets in chunks and load only the designated bundle for the current page. `CommonsChunkPlugin` can be used here.


