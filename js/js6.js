"use strict";
let pow = parseInt(Math.random() * 10);
alert("Сейчас вы должны будите ввести число, которое возведется в случайную степень от 1 до 10, вы должны будетите угадать что это за число");
let val = parseInt(prompt("Введите число от 1 до 100"));
function power(val, pow) {
	let answer = prompt("Ваше предположение?");
	if (answer > (val**pow)) {
		alert("Число слишком большое");
	} else {
		if (answer < (val**pow)) {
			alert("Число слишком маленькле");
		} else {
			alert("Вы угадали");
			return;
		}
	}
	power(val, pow);
}
power(val, pow);

