import render from "./renderCards.js";

const filter = (carts) => {

    const tabs = document.querySelector('.tabs');
    let data = carts.carts;
    let filterSeries;

    tabs.addEventListener('click', function(e){
        filterSeries = e.target.dataset.val;
        let filteredCards;

        if(filterSeries === 'all'){
            filteredCards = data;
        }else{
            filteredCards = data.filter(item => item.brand === filterSeries);
        }
        render.renderCards(filteredCards);
    })

}

export default {
    filter
}