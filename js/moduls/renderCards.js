const renderCards = (cards) => {

    const goodsContainer = document.querySelector('.goods-list');

    const arr = cards.carts;

    const render = (arr) => {
        arr.forEach(cart => {
            console.log(cart);
            goodsContainer.innerHTML += fillHTML(cart);
        });
        
    }


    const fillHTML = ({id, brand, name, image, price}) => {
        return `
            <li class="good-cart" data-id="${id}" data-brand="${brand}">
                        <img src="${image}" alt="casio">
                        <div class="name">${name}</div>
                        <div class="price">${price}</div>
                        <button class="to-card">В корзину</button>
                    </li>
        `
    }

    render(arr);
}

export default {
    renderCards
}
