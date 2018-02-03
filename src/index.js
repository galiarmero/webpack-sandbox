import _ from 'lodash';
import './style.css';
import Logo from '../images/webpack-logo.svg';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var logo = new Image();
    logo.src = Logo;
    element.appendChild(logo);

    return element;
}

document.body.appendChild(component());

/**
 * Lodash is now imported. Global scope is not polluted.
 */