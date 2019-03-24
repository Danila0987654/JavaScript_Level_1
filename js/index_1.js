"use strict";

alert("В консоль введите number(число)");
function number(num){
	if (isNaN(num)){
		console.log('Ошибка: параметр не является числом');
	} 
	else if(num>999 || num<0){
		console.log('Ошибка: допустимый диапазон 0-999');
	  	var obj={};
	  	return obj;
	} 
	else {
		let digits=['one','ten','hundreed'];
	  	var obj={};
	  	let i=0;
	  	for(let i=0; num!=0; i++){
	  		obj[digits[i]]=num%10;
	  		num=(num-num%10)/10;
		}
	}	
	return obj;
}
console.log(number(245));
console.log(number(25));
console.log(number(2));
