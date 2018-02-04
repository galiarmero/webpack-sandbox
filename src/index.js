import _ from 'lodash';
// [1] import './style.css';
// [2] import Logo from '../images/webpack-logo.svg';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // [1] element.classList.add('hello');
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    /* [2]
    var logo = new Image();
    logo.src = Logo;
    element.appendChild(logo);
    */
    return element;
}

document.body.appendChild(component());

/**
 * Lodash is now imported. Global scope is not polluted.
 */

 // [1] css-loader
 // [2] file-loader