"use strict";

let d = document,
itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерная установка обработчика событий

function addEvent(elem, type, handler){
  	if(elem.addEventListener){
    	elem.addEventListener(type, handler, false);
  	} else {
    	elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  	}
  	return false;
}

// Получаем данные из LocalStorage
function getCartData(){
	return JSON.parse(localStorage.getItem('cart'));
}

// Записываем данные в LocalStorage
function setCartData(o){
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}

// Добавляем товар в корзину
function addToCart(e){
	this.disabled = true; // блокируем кнопку на время операции с корзиной
	let cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
		parentBox = this.parentNode, // родительский элемент кнопки &quot;Добавить в корзину&quot;
		itemId = this.getAttribute('data-id'), // ID товара
		itemImg = parentBox.querySelector('.product_img').innerHTML, // фото товара
		itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
		itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
	if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
		cartData[itemId][3] += 1;
	} else { // если товара в корзине еще нет, то добавляем в объект
		cartData[itemId] = [itemImg, itemTitle, itemPrice, 1];
	}
	// Обновляем данные в LocalStorage
	if(!setCartData(cartData)){ 
		this.disabled = false; // разблокируем кнопку после обновления LS
		cartCont.innerHTML = 'Товар добавлен в корзину.';
		setTimeout(function(){
			cartCont.innerHTML = 'Продолжить покупки...';
		}, 1000);
	}
	return false;
}

// Устанавливаем обработчик события на каждую кнопку &quot;Добавить в корзину&quot;
for(var i = 0; i < itemBox.length; i++){
	addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

// Открываем корзину со списком добавленных товаров
function openCart(e){	
	let cartData = getCartData(), // вытаскиваем все данные корзины
			totalItems = '';
	console.log(JSON.stringify(cartData));
	// если что-то в корзине уже есть, начинаем формировать данные для вывода
	if(cartData !== null){
		totalItems = '<table class="shopping_list"><tr><th>Фото</th><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
		for(let items in cartData){
			totalItems += '<tr>';
			for(let i = 0; i < cartData[items].length; i++){
				totalItems += '<td>' + cartData[items][i] + '</td>';
			}
			totalItems += '</tr>';
		}
		totalItems += '<table>';
		cartCont.innerHTML = totalItems;
	} else {
		// если в корзине пусто, то сигнализируем об этом
		cartCont.innerHTML = 'В корзине пусто!';
	}
	return false;
}

function count() {
	let cartData = getCartData();
	let summa = 0;
	summa += cartData[itemPrice] * cartData[3];
	alert(summa);
}

/* Открыть корзину */
addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
	localStorage.removeItem('cart');
	cartCont.innerHTML = 'Корзина очищена.';	
addEvent(d.getElementById('count'), 'click', count);
});

