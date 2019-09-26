function fillMeta(){
	var name = document.getElementById('Product_title').value;
	var title;
	var description;
	var titleTag = document.getElementById('Product_link_title');
	var descriptionTag = document.getElementById('Product_meta_desc');
	var metaTitleTag = document.getElementById('Product_meta_title');
	
	if(!document.getElementById('Product_alt_title').value) document.getElementById('Product_alt_title').value = ''+name;
	title ='Купить ' + name + ' недорого в Екатеринбурге';
	description = 'Купить ' + name + ' из Италии по выгодной цене в интернет магазине Empoli  в Екатеринбурге';
	titleTag.value = ''+title;
	descriptionTag.value = ''+description;
	metaTitleTag.value = '' + title;
	
	var changeButton = document.querySelector('div[stat="0"]');
	changeButton.style.backgroundColor = '#9F3';
	changeButton.style.borderColor='#9F3';
	changeButton.style.color='black';
	changeButton.innerHTML='<p>Готово!</p>';
	
	
}

function setName(){
var product= document.getElementById('Product_type_id').options[document.getElementById('Product_type_id').selectedIndex].text;
var model = document.getElementById('Product_title');
var master = document.getElementById('Product_manufacturer_id').options[document.getElementById('Product_manufacturer_id').selectedIndex].text;
var textF =  product +' ' + model.value + ' от ' + master;
model.value = textF;

}


(function addButton(){
var confirmButton = document.createElement('div');
confirmButton.onclick= fillMeta;
confirmButton.innerHTML ='<p>Выписать title</p>';
confirmButton.className = 'btn btn-info';
document.querySelector('#yw0>ul').appendChild(confirmButton);

var confirmButton = document.createElement('div');
confirmButton.onclick= setName;
confirmButton.innerHTML ='<p>Изменить текст</p>';
confirmButton.className = 'btn btn-info';
document.querySelector('#yw0>ul').appendChild(confirmButton);

var confirmButton = document.createElement('div');
confirmButton.innerHTML ='<p>Не готово</p>';
confirmButton.className = 'btn btn-danger';
confirmButton.setAttribute('stat', 0);
document.querySelector('#yw0>ul').appendChild(confirmButton);

//Я не знаю зачем мне это было нужно. Наверно тестировал меняется ли title в другой вкладке.
var checkMessage = document.createElement('div');
var miniStr = '<h1> Title: </h1><p>' + document.getElementById('Product_link_title').value + '</p>'
						+ '<h1> TitleMeta: </h1><p>' + document.getElementById('Product_meta_title').value + '</p>'
						+ '<h1> Description:</h1><p>' + document.getElementById('Product_meta_desc').value + '</p>'
						+ '<h1> Alt for Photo: </h1><p>' + document.getElementById('Product_alt_title').value + '</p>' ;
checkMessage.innerHTML = miniStr;
checkMessage.style.cssText = 'position: absolute; \
							top: 300px; \
							left: 300px; \
							background: #0cf; \
							border-radius: 5px; \
							display: none;';
document.getElementsByClassName('ui-tabs ui-widget ui-widget-content ui-corner-all')[0].appendChild(checkMessage);

})();

(function showDescr(){
	let elem = document.getElementById('Product_description');
	console.log(elem.value);
	
	document.querySelector('input[name="saveout"]').addEventListener('mouseover', function(){ 
				if(!document.getElementById('Product_link_title').value){
					alert('Хотя бы title заполни!');
				}
			}
	);
	
})();

	
(function getHref(){
	
	var list = document.querySelectorAll('#ajaxListView .figcaption a');
	var arr = [];
	for( let i =0; i < list.length; i++){ 
		arr.push(list[i].href);
		
		}
	console.log('--------------DONE---------------');
	console.log(arr.join('\n'));	
})();

/* Схема использования:
1.В CMS открыть консоль внутри карточки товара.
2.вставить первые 4 функции и нажать enter
3. Нажать на появившиеся кнопки ( в списке в самом верху) сначала на 'изменить тест', затем на 'вписать title'.
4. сохранить карточку
5. На сайте в категории с товарами открыть консоль и скопировать функцию getHref и нажать Enter. Забрать ссылки из консоли.

Вписать title - просто переносит с добавлениями текст из названия товара, так что можно использовать сколько угодно раз и ничего не будет.
*/

//trnsl.1.1.20190814T113238Z.4090d245337df149.36b891b45ea9ed8e09ba44185de6f99c29ccfc22 API-Translater





function isPrime(value){
	if(!isPrime.answers) isPrime.answers=[];
	if (isPrime.answers[value] !== undefined){ return isPrime.answers[value];}
	else{
	var prime = value !==0 && value !== 1;
	for (let i = 2; i< value; i++ ){
		if(value % 2 == 0){
			prime = false;
			break;
			}
		}
	}
	return isPrime.answers[value] = prime;
}
