// Первая часть

var rows = document.querySelector('table').rows;
var reg = /\.pdf$/i;
var primaryArray = [];
 

for (let i =1; i < rows.length; i++){
	var temporyArray = [];
	if(rows[i].cells[0].innerText.search(reg) == -1){
	temporyArray.push(rows[i].cells[0].innerText);
	temporyArray.push(rows[i].cells[1].innerText);
	primaryArray.unshift(temporyArray);
	}
}

var json = JSON.stringify(primaryArray);
let elem = document.createElement('a');
elem.href = "data: attachment/text," + json;
elem.download = 'links.json';
elem.click();

// Вторая часть 
var primaryArray = 
	var str ='';
	for(let i=0; i < primaryArray.length; i++){
		var temporyArray = primaryArray[i] ;
		for(let b =0; b < temporyArray[0].length;b++){
			switch (temporyArray[0][b]){
				case '/':
					str += '\\'+temporyArray[0][b];
					break;
				case '.':
					str += '\\'+temporyArray[0][b];
					break;
				case '?':
					str += '\\'+temporyArray[0][b];
					break;
				case '&':
					str += '\\'+temporyArray[0][b];
					break;
				default:
					str += temporyArray[0][b];
			}
		}
		temporyArray[0] = str;
		str ='';
	}
	
	var json = JSON.stringify(primaryArray);
let elem = document.createElement('a');
elem.href = "data: attachment/text," + json;
elem.download = 'fullLinkData.json';
elem.click();

//Третья Часть 

var primaryArray = 
var i =0;
var secondArray = [];
var delay = setTimeout(function parse(){
	var temporyArray = primaryArray[i] ;
	var newWin = window.open(temporyArray[1]);
	newWin.addEventListener('DOMContentLoaded', function(){
			var item = newWin.document.querySelector('.breadcrumb__item:last-child').innerText;
			var category = newWin.document.querySelector('.breadcrumb__item:last-child').previousElementSibling.innerText;
			var regForRef = new RegExp('<a.*?href="' + temporyArray[0] + '".*?>(.*?)<\\/a>','gi');
			var str = newWin.document.body.innerHTML;
			var textResult = regForRef.exec(str);
	
			temporyArray.push(category);
			temporyArray.push(item);
		temporyArray.push(textResult[1]);
	});
			
			secondArray.unshift(temporyArray);
			
			setTimeout( function(){newWin.close();} , 2000);
			i++ ;
			if (i < primaryArray.length){
				setTimeout(parse, 5000);
				
			}else{ console.log('-----DONE-----');}
}, 5000);

var json = JSON.stringify(primaryArray);
let elem = document.createElement('a');
elem.href = "data: attachment/text," + json;
elem.download = 'linkWithWords.json';
elem.click();


// Четвертая 
var primaryArray =  
primaryArray = primaryArray.slice();
var regExp = /\/([\d]+?)\//;
var i =0;

setTimeout(function killReference(){

	var temporyArray = primaryArray[i] ;
	var regResult = regExp.exec(temporyArray[1]) 
	var newWin = window.open('http://pribor-energy.ru/admin/app/product/' + regResult[1] + '/edit');
	newWin.addEventListener('load', function(){
			console.log(i);
			i++ ;
			if (i < primaryArray.length){
				setTimeout(killReference, 25000); // 21000 для одиночных ссылок, 25000 для 2-4, 27000 и > при 10 и больше
			}else{ console.log('-----DONE-----');}
			
			if(!!temporyArray[4]){
			newWin.console.log(temporyArray[4]);
			}else{newWin.console.log(temporyArray[0]);}
			
});
}, 100);



