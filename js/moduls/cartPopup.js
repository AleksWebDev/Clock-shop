const popUp = () => {

    const overlay = document.querySelector('.overlay');
    const busket = document.querySelector('.busket');
    const body = document.querySelector('body');

        body.addEventListener('click', function(e){
            if(e.target.classList.contains('icon-busket')){
                overlay.classList.add('active');
                busket.classList.add('active');
                body.style.overflow = 'hidden';
            }else if(e.target.classList.contains('close-busket') || e.target.classList.contains('overlay')){
                overlay.classList.remove('active');
                busket.classList.remove('active');
                body.style.overflow = '';
            }
        })

}

export {
    popUp
}