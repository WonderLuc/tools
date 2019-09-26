(function addButton(){ 
var confirmButton = document.createElement('div');
confirmButton.onclick= fillMeta;
confirmButton.innerHTML ='<p>Выписать title</p>';
confirmButton.className = 'btn btn-info';
document.querySelector('textarea[name="short_description_ru-RU"]').parentElement.appendChild(confirmButton);

var confirmButton = document.createElement('div');
confirmButton.className = 'btn';
if(!document.querySelector('input[name="meta_title_ru-RU"]').value || !document.querySelector('input[name="meta_description_ru-RU"]').value){
	confirmButton.innerHTML ='<p>Не готово</p>';
	confirmButton.classList.add('btn-danger');}else{confirmButton.style.backgroundColor = '#9F3';
		confirmButton.style.color='black';
		confirmButton.style.borderColor='red';
		confirmButton.style.borderWidth='3px';
		confirmButton.innerHTML='<p>Сделано ранее!</p>';}
confirmButton.setAttribute('stat', 0);
document.querySelector('textarea[name="short_description_ru-RU"]').parentElement.appendChild(confirmButton);
})();


function fillMeta(){ 
	var name = document.querySelector('input[name="name_ru-RU"]').value;
	var title;
	var description;
	var titleTag = document.querySelector('input[name="meta_title_ru-RU"]');
	var descriptionTag = document.querySelector('input[name="meta_description_ru-RU"]');
	
	
	title ='Купить ' + name + ' недорого в Екатеринбурге';
	description = 'Купить ' + name + ' по привлекательной цене в интернет-магазине Гарнитуроф. Гарантия качества до 1 года со дня покупки. Быстрая доставка по Екатеринбургу и области';
	titleTag.value = ''+title;
	descriptionTag.value = ''+description;
	
	var changeButton = document.querySelector('div[stat="0"]');
	changeButton.style.backgroundColor = '#9F3';
	changeButton.style.borderColor='#9F3';
	changeButton.style.color='black';
	changeButton.innerHTML='<p>Готово!</p>';
}


(function getHref(){
	
	
	var list =document.querySelectorAll('.name>a');
	var arr = [];
	for( let i =0; i < list.length; i++){ 
		arr.push(list[i].href);
		
		}
	console.log('--------------DONE---------------');
	console.log(arr.join('\n'));	
})();


http://garniturof.ru/katalog/xten/stol-pismennyj-xcet-149-l-r-1400k