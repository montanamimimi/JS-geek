
// Макет немного другой, но суть таже. 
// Удалила остальные страницы, кроме product, чтобы было понятно где проверять. 

'use strict';

// Вопрос - правильно же что такие скрипты в конец файла надо грузить? Перед </body>?

let products = document.querySelectorAll('.products_item');
let prodList = [];
let basket = document.querySelector('.basket-megamenu');
let prodInBasket = document.querySelector(".basket-mega-products");
let roundOne = document.querySelector(".number-of-products  ");

// Класс для созданиямассива товаров 

class Prod {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
    units = 0;
}

// Перебираем все товары

for (let i = 0; i < products.length; i++) {

    // Назначаем кнопкам data-id

    let button = products[i].querySelector(".products_add_link");
    button.dataset.id = i;

    // При клике на кнопку вызываем функцию увеличения кол-ва товаров 

    button.addEventListener('click', logClick);

    // Составляем список всех товаров на странице, кладем в массив 

    let product = takeProdData(products[i]);
    prodList.push(product);
}

// Увеличивает на 1 количество требуемого товара в корзине. Показываем содержимое корзины. 

function logClick(event) {
    ++prodList[event.currentTarget.dataset.id].units;
    getProductsList();     
    showBasket(basket);   
    setTimeout(hideBasket, 1200, basket);
}

// Берет данные о товаре из разметки и кладет в новый объект типа Prod 

function takeProdData(product) {
    let name = product.querySelector('.products_title').innerText;
    let price = +product.querySelector('.products_price').innerText.slice(1);
    let img = product.querySelector('.product_image').src;
    return new Prod(name, price, img);
}

// Показываем и прячем содержимое корзины

function showBasket(basket){
    basket.style.display = "flex";
    basket.style.top = "55px";
    basket.style.left = "-30px";
}

function hideBasket(basket){
    basket.style.display = "";
}

// Заполняем содержимое в корзине товарами (разметка)

function getProductsList() {
    let prodNumber = 0;
    let newProdList = "";
    for (let i = 0; i<prodList.length; i++) {
        if (prodList[i].units > 0) {
             newProdList += constructProd(prodList[i]);
             prodNumber += prodList[i].units;
        }
    }
    prodInBasket.innerHTML = newProdList;
    roundOne.style.display = "flex";    
    roundOne.innerHTML = prodNumber;
}

// разметка для 1 товара 

function constructProd(product) {
    return `<a href="#" class="basket-product-link">
                <div class="basket-product basket-pruduct-first">
                    <div class="basket-product-img">
                        <img src="${product.img}" alt="Rebox" class="basket-product-img-img">
                    </div>
                    <div class="basket-product-desc">
                        <p class="basket-product-name">
                        ${product.name}
                        </p>
                        <div class="basket-product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="basket-product-price">
                        ${product.units}  x   $${product.price} = $${product.units * product.price}
                        </p>
                    </div>
                    <div class="basket-product-del">
                        <i class="fas fa-times-circle"></i>
                    </div>
                </div>
            </a>`;
}



