;(function(){// Create a interface for Mixer(== Text task for text.ru)
var mainWindow = document.createElement('div');
mainWindow.classList.add('mainWindow');
// Nested this element to left conor of window and hide
mainWindow.style.cssText = "border: 1px solid black; \
							box-shadow: 0 0 15px 3px green; \
							border-radius: 3px; \
							margin:0; \
							display: none; \
							box-sizing:border-box; \
							padding: 10px; \
							background: white; \
							position:absolute; \
							z-index: 999; \
							width: 100%; \
							top: 3px; \
							left: 3px;";
// Create a sructure of interface and fill some options like default
mainWindow.innerHTML = '<div style="float:left; width:30%;"><label>Скрытая семантика<br/><textarea class="mainWindow__wordForm mainWindow__words" placeholder="Пиши сюда свои дополнительные слова" rows="10" cols="45"></textarea> </label> <br/>\
						<label>Ключевые слова<br/><textarea class="mainWindow__wordForm mainWindow__textForm" placeholder="А сюда ключевики" rows="20" cols="45"></textarea></label> \
						</div><div><label> Итоговый текст<br/><p class="mainWindow__wordForm mainWindow__finalText mainWindow__finalText_disable"></p></label><br/> \
						<table><tr><td><p >Процент примешивания:</p></td><td><input class =" mainWindow__percent" type="text" value="10"></td><td><p>%</p></td></tr> \
						<tr><td><p >Знак разделитель слов Скрытой семантики:</p></td><td><input class =" mainWindow__percent mainWindow__spliter" type="text" value=","></td><td><p>(по умолчанию - ,)</p></td></tr> \
						<tr><td><p >Знак разделитель слов Ключевиков:</p></td><td><input class =" mainWindow__percent mainWindow__spliter" type="text" value=","></td><td><p>(по умолчанию - ,)</p></td></tr> \
						<tr><td><p> Страница сайта: </p></td><td colspan="2"><input class =" mainWindow__percent mainWindow__percent_large " type="text" ></td></tr> \
						</table><br/><input class="mainWindow__button mainWindow__buttonCollect" type="submit" value="Собрать">\
						<input class="mainWindow__button mainWindow__buttonMix" type="submit" value="Миксовать"> \
						<input class="mainWindow__button mainWindow__buttonClear" type="submit" value="Очистить"> \
						<input class="mainWindow__button mainWindow__buttonClose" type="submit" value="Закрыть"></div>';
// Add to styles for Mixer at the last <style> or create <style> and add styles
if (!!document.getElementsByTagName('style')[0]){						
var style =document.getElementsByTagName('style')[document.getElementsByTagName('style').length -1];}
else{var style = document.createElement('style'); document.head.appendChild(style); }
style.innerText += ".mainWindow__wordForm{ \
						border: 2px solid green; \
						border-radius: 4px;	\
						width: 90%; \
						height: 20%;} \
					.mainWindow__textForm{ \
						height: 40%; }\
					.mainWindow__finalText{ \
						width:67%; \
						max-height:400px; \
						heigth:60%; \
						margin:0;\
						overflow:scroll;} \
					.mainWindow__finalText_disable{ \
						border-color:rgba(128,128,128, 0.6); \
						background: rgba(128,128,128, 0.6); }\
					.mainWindow__percent{ \
						width:30px;} \
					.mainWindow__percent_large{\
						width: 120px;\
					}\
					.mainWindow__button{ \
						background-color: #4CAF50; \
						border: none; \
						color: white; \
						padding: 16px 32px; \
						text-decoration: none; \
						margin: 4px 2px; \
						cursor: pointer; }\
					.mainWindow__button:hover{ \
						background-color: #31AE35;} \
					.mainWindow__button:active{ \
						box-shadow: inset 0 0 6px 10px rgba(0, 0, 0, 0.5);} \
					.mainWindow__buttonClose{ \
						background-color: #FE2E2E } \
					.mainWindow__buttonClose:hover{ \
						background-color: #FF0000; }\
					.mainWindow__buttonClear{ \
						background-color:#1E90FF; \
					}\
					.mainWindow__buttonClear:hover{ \
					background-color:#007ef9; \
					}\
					.mainWindow__buttonCollect{\
						background-color:#d96404;\
					}\
					.mainWindow__buttonCollect:hover{\
						background-color:#bf5600;\
					}\
					strong{ \
						font-weight: bold;}\
					.newWord{ \
						color:red;} \
					"
						
// Add Mixer at page body
document.body.appendChild(mainWindow);
// Create and in begin of page the button for open Mixer
var showButton = document.createElement('input');
showButton.type='submit';
showButton.value='Открыть Миксер';
showButton.style.cssText='position:fixed; \
							z-index: 998; \
							top: 3px; \
							opacity: 0.9; \
							left: 3px; ';
showButton.classList.add('mainWindow__button');
document.body.insertAdjacentElement('afterBegin', showButton);
// Give functionality to Mixer buttons
showButton.addEventListener('click', function(){
							// Show mixer interface
								document.getElementsByClassName('mainWindow')[0].style.display ='block';});

document.querySelector('.mainWindow__buttonClose').addEventListener('click', function(){ 
											// Close Mixer interface
													document.getElementsByClassName('mainWindow')[0].style.display = 'none';
													// Change Mixer result 
													document.querySelector('.mainWindow__finalText').contentEditable = true;});
													
document.querySelector('.mainWindow__buttonMix').addEventListener('click', function(){
								let words = document.querySelector('.mainWindow__words').value.split(document.querySelectorAll('.mainWindow__spliter')[0].value);
								let texts = document.querySelector('.mainWindow__textForm').value.split(document.querySelectorAll('.mainWindow__spliter')[1].value);
								let finalText = document.querySelector('.mainWindow__finalText'); 
								let pageForMeet = document.querySelector('.mainWindow__percent_large').value;
								let mixedText='';
								let template = ['<strong>Задача:</strong> Требуется написать описание услуги. Особо внимание следует уделить особенностям и характеристикам, чтобы ответить на те вопросы потенциальных покупателей, которые могут возникнуть перед покупкой. Заспамленность текста должна стремиться к 40%. Можно не гнаться за точным вхождением ключевиков - можно разбавлять, дробить и использовать словоформы. Главное, чтобы каждое слово из запросов встречалось в тексте 2-3 раза. Желательно, но необязательно использовать в тексте следующие слова:<br/>',
								'<br/><strong>Объем текста:</strong> от 2499 до 2999 знаков. <br/><strong>Ключевые слова:</strong> Употребить 2 раза, можно склонять, дробить, разбавлять :<br/><br/>',
								'<br/><strong>Сайт для ознакомления: </strong><br/>',
								'<br/><strong>Требуемая уникальность:</strong> 100% по text.ru <br/><strong>Цель текста:</strong> предоставить понятное описание товара, свойство-выгода, продать товар. <br/><strong>Дополнительная информация:</strong> Текст должен быть разделен на абзацы, обязательны подзаголовки и основной заголовок, желательный маркированные списки.'
								]
								mixedText += template[0];
								for(let i =0; i < words.length; i++){
									mixedText += words[i] + '<br/>';
								}
								mixedText += template[1];
								for(let i =0; i < texts.length; i++){
									mixedText += texts[i] + '<br/>';
								}
								if(!!pageForMeet){
									mixedText += template[2] + pageForMeet ;
								}
								mixedText += template[3]  ;
								finalText.classList.remove('mainWindow__finalText_disable');
								finalText.innerHTML = mixedText;
								finalText.contentEditable = true;
});

document.querySelector('.mainWindow__buttonClear').addEventListener('click', function(){
							document.querySelector('.mainWindow__words').value = "";
							document.querySelector('.mainWindow__textForm').value = "";
							document.querySelector('.mainWindow__percent_large').value = "";
							document.querySelector('.mainWindow__finalText').classList.add('mainWindow__finalText_disable');
							document.querySelector('.mainWindow__finalText').innerHTML = "";
							document.querySelector('.mainWindow__finalText').contentEditable = false;
});

document.querySelector('.mainWindow__buttonCollect').addEventListener('click', function(){
							var keys = document.querySelector('.clear-list').querySelectorAll('li>label>span>span');
							var lst = document.querySelectorAll('.beautif-ul.ot-ul>li');
							var key ='';
							var word ='';
							for( let i =0; i <keys.length; i++){
								key += ',' + keys[i].innerText;
							}
							for( let i =0; i <lst.length; i++){
								word += ',' + lst[i].innerText;
							}
							document.querySelector('.mainWindow__words').value = word;
							document.querySelector('.mainWindow__textForm').value = key;
							document.querySelector('.mainWindow__percent_large').value = document.querySelector('.break-all\na').href;
							console.log('_______KEYS__________\n' + key);
							console.log('__________LSI___________\n' + word);
	
});

})();