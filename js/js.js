"use strict";
// task_1
//1 пример
let a = 1, b = 1, c, d;
c = ++a; /* ++ означает то, что
c будет каждый раз прибавлять a.
Это тоже самое, что c = c + a;
*/
alert(c);

//2 пример
d = b++;
alert(d); /*Он возвращает старое
значение , до увеличения
*/

//3 пример
c = (2+ ++a);
alert(c); /*

*/

//4 пример
d = (2+ b++);
alert(d);
alert(a);
alert(b);

//task_2
let y = 2;
let t = 1 + (a *= 2);
alert("Задание 2 = " + t);

//task_3
let p = parseInt(prompt(("Введите 1 число")));

let f = parseInt(prompt(("Введите 2 число")));

if ((p >= 0) && (f >= 0)) alert("Оба числа положительный, Их разность = " + (p - f));
if ((p < 0) && (f < 0)) alert("Оба числа отрицательын, Их произведение = " + (p * f));
if (((p >= 0) && (f < 0)) || ((p < 0) && (f >= 0))) alert("Они разных знаков, их сумма = " + (p + f));

//task_4
function taks_4sum(p, f) {
	return parseInt(p + f);
}
let rez1 = taks_4sum(p, f);
alert("Суммирование = " + rez1);
function taks_4minus(p, f) {
	return parseInt(p - f);
}
let rez2 = taks_4minus(p, f);
alert("Вычитание = " + rez2);
function taks_4times(p, f) {
	return parseInt(p * f);
}
let rez3 = taks_4times(p, f);
alert("Умножение = " + rez3);
function taks_4divited(p, f) {
	return parseInt(p / f);
}
let rez4 = taks_4divited(p, f);
alert("Деление = " + rez4);

//task 5
let arg1 = parseInt(prompt("Введите первое число")); 
let arg2 = parseInt(prompt("Введите второе число"));
let operation = prompt ("Какую операцию вы хотите совершить с числами?");
function mathOperation (arg1, arg2, operation) {
	switch (operation) {
		default:
			return;
		case 'сложить':
			return parseInt(arg1 + arg2);
			break;
		case 'умножить':
			return parseInt(arg1 * arg2);
			break;
		case 'делить':
			return parseInt(arg1 / arg2);
			break;
		case 'вычесть':
			return parseInt(arg1 - arg2);
			break;
	}
}
let result = mathOperation(arg1, arg2, operation);
alert (result);
console.log(result);