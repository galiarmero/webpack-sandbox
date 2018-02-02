function component() {
    var element = document.createElement('div');

    // uses Lodash but you can't really know in this file
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());