//Я не рекомендую это использовать. Это жутко прикладная дичь, которая собирает с БРИФА ТЕКСТА в лабрике слова в консоль, разделяя их запятыми.
;(function labrikaWordParser(){
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
console.log('_______KEYS__________\n' + key);
console.log('__________LSI___________\n' + word);
})();