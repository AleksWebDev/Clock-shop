import carts from './products.js';
import render from './moduls/renderCards.js';
window.addEventListener('DOMContentLoaded', function(){
    render.renderCards(carts);
})
