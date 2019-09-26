/* Злая вещь.
Добавь колонку через CMS . 
Вставь код в консоль на странице прайса. 
Редактирует прайсы на странице. 
Затем нужно скопировать табличный код и вставить в CMS.
Использовать осторожно и внимательно. */

(function addButn(){
	


var butn = '<a href="https://online.uralclinic.ru/" class="butny">Записатьcя на прием </a>'; 
var bigestTable = 2;

for(let i = 2; i < document.getElementsByTagName('table').length; i++){
	if (document.getElementsByTagName('table')[i].rows.length > 1){
	document.getElementsByTagName('table')[i].rows[0].cells[2].style.width = '200px';
	if (document.getElementsByTagName('table')[i].rows.length > document.getElementsByTagName('table')[bigestTable].rows.length){
		bigestTable = i;
	}
	}
}

for(let i = 2; i < document.getElementsByTagName('table').length - 2; i++){
	if (document.getElementsByTagName('table')[i].rows.length > 1){
	for(let j = 1; j<document.getElementsByTagName('table')[i].rows.length; j++){
	document.getElementsByTagName('table')[i].rows[j].cells[1].innerHTML += ' рублей';
	document.getElementsByTagName('table')[i].rows[j].cells[2].style.width = '200px';
	document.getElementsByTagName('table')[i].rows[j].cells[2].innerHTML = butn;
	}
}
}
console.log(document.getElementsByTagName('table')[2]);
})();


