const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

//tabs

const itemButtons = document.querySelectorAll('.tabs-deals__button');
const itemTabs = document.querySelectorAll('.tabs-deals__items');


document.addEventListener('click', (e) => {
    let currentActiveItem = null;
    let currentNewActive = null;
    let targetElement = e.target;

    if (targetElement.closest('.tabs-deals__button')) {
        itemButtons.forEach((item, index) => {

            if (item.classList.contains('active')) {
                currentActiveItem = index;
                item.classList.remove('active');
            }

            if (item === targetElement) {
                currentNewActive = index;
            }
        })
        targetElement.classList.add('active');
        itemTabs[currentActiveItem].classList.remove('active');
        itemTabs[currentNewActive].classList.add('active')

    }
});

//rating

const stars = document.querySelectorAll('.star');
console.log(stars);

stars.forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.dataset.items = item.dataset.item
    })
})