document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');
    
    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    

}

function setRandomPosition(element, error = null) {
    const errorMessage = document.querySelector('.alert')
    
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    try {
        if(error) {
            throw error;
        }
    } catch(e) {

        errorMessage.children[0].children[0].innerText = e.message
        errorMessage.classList.remove('alert--hidden')

    }
    
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error);
    })
}