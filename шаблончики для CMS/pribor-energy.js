
var current = document.getElementsByTagName('label')[0].getAttribute('for').split('_')[0];
var nameId = current + '_name';
var titleId = current + '_seo_title';
var descriptionId = current + '_seo_description';

(function addButton(){ 
var confirmButton = document.createElement('div');
confirmButton.onclick= fillMeta;
confirmButton.innerHTML ='<p>Выписать title</p>';
confirmButton.className = 'btn btn-info';
document.querySelector('.box-header').appendChild(confirmButton);

var confirmButton = document.createElement('div');
confirmButton.className = 'btn';
if(!document.getElementById(titleId).value || !document.getElementById(descriptionId).value){
	confirmButton.innerHTML ='<p>Не готово</p>';
	confirmButton.classList.add('btn-danger');}else{confirmButton.style.backgroundColor = '#9F3';
		confirmButton.style.color='black';
		confirmButton.style.borderColor='red';
		confirmButton.style.borderWidth='3px';
		confirmButton.innerHTML='<p>Сделано ранее!</p>';}
confirmButton.setAttribute('stat', 0);
document.querySelector('.box-header').appendChild(confirmButton);
})();


function fillMeta(){ 
	var name = document.getElementById(nameId).value;
	var title;
	var description;
	var titleTag = document.getElementById(titleId);
	var descriptionTag = document.getElementById(descriptionId);
	
	
	title ='Купить ' + name + ' недорого в Екатеринбурге';
	description = 'Купить ' + name + ' по выгодной цене высокого качества в Екатеринбурге в ТД Прибор Энерго';
	titleTag.value = ''+title;
	descriptionTag.value = ''+description;
	
	var changeButton = document.querySelector('div[stat="0"]');
	changeButton.style.backgroundColor = '#9F3';
	changeButton.style.borderColor='#9F3';
	changeButton.style.color='black';
	changeButton.innerHTML='<p>Готово!</p>';
}

