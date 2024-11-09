import carts from './products.js';
import render from './moduls/renderCards.js';
import busket from './moduls/busket.js';
import { popUp } from './moduls/cartPopup.js';
import addCards from './moduls/toCard.js';
import filter from './moduls/filter.js';


window.addEventListener('DOMContentLoaded', function(){
    render.renderCards(carts);
    busket.busket();
    popUp();
    addCards.toCard();
    filter.filter(carts);
})
