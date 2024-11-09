import cards from './../products.js';

const toCard = () => {

    const goodsList = document.querySelector('.goods-list');
    const busketList = document.querySelector('.busket-list__goods');
    const totalPriceLabel = document.querySelector('.total-goods');

    const targetCards = JSON.parse(localStorage.getItem('card')) || [];

    const data = cards.carts;
    let target;

    const deleteFromBasket = () =>{
        busketList.addEventListener('click', function(e){
            const target = parseInt(e.target.parentNode.dataset.id);
            const targetId = targetCards.find(card => card.id === target);

            
            targetCards.splice(targetId, 1);
            renderGoodsInBasket(targetCards);
            saveToLS();
            calculateTotalPurchase();
        })
    }

    const calculateTotalPurchase = () => {
        const cards = document.querySelectorAll('.card-good');

        let totalCartValue = 0;

        cards.forEach(item => {
            const price = item.querySelector('.price');
            const count = item.querySelector('.card-good__count');

            const totalPriceCount = parseInt(price.innerText) * parseInt(count.innerText);
            totalCartValue += totalPriceCount;
        })    

        totalPriceLabel.innerText = `Total purchase: ${totalCartValue}`;
    }

    const updateCounter = () => {

        let currentItem, countValue, minus, plus;

        busketList.addEventListener('click', function(e){
            if(e.target.classList.contains('plus') || e.target.classList.contains('minus')){
                currentItem = e.target.parentNode.parentNode;
                countValue = currentItem.querySelector('.card-good__count');
                
                minus = currentItem.querySelector('.minus');
            }


            if(e.target.classList.contains('minus')){
                if(parseInt(countValue.innerText) <= 1){
                    minus.setAttribute('disabled', true);
                }else{
                    countValue.innerText = parseInt(countValue.innerText) - 1;
                }
            }
            
            if(e.target.classList.contains('plus')){
                minus.removeAttribute('disabled');
                countValue.innerText = parseInt(countValue.innerText) + 1;
            }

            calculateTotalPurchase();
            
        })
    }

    const addToCard = () => {
        goodsList.addEventListener('click', function(e){
            if(e.target.classList.contains('to-card')){
                const currentTarget = parseInt(e.target.parentNode.dataset.id);
                target = data.find(el => el.id === currentTarget);
                targetCards.push(target);
                saveToLS();
            }
        })
    }

    const saveToLS = () => {
        localStorage.setItem('card', JSON.stringify(targetCards));
    }

    const renderGoodsInBasket = (targetCards) => {
        busketList.innerHTML = '';
        targetCards.forEach(card => {
            busketList.innerHTML += fillHTMLBusket(card);
        });

    }

    const fillHTMLBusket = ({id, image, name, price}) => {
        return `
            <li class="card-good" data-id="${id}">
                        <span class="card-good__id">${id}</span>
                        <img class="card-good__img" src="${image}" alt="clock">
                        <span class="card-good__name">${name}</span>
                        <div class="count">
                            <button type="button" class="minus">-</button>
                            <span class="card-good__count">1</span>
                            <button type="button" class="plus">+</button>
                        </div>
                        
                        <span class="price">${price}</span>

                        <button type="button" class="delete">Удалить</button>
                    </li>
        `
    }

    addToCard();
    renderGoodsInBasket(targetCards);
    updateCounter();
    calculateTotalPurchase();
    deleteFromBasket();
    

}

export default {
    toCard
}