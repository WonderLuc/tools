function fillMeta(){
var str =document.querySelector('input[name="name"]').value;
var title = document.querySelector('input[name="title_meta"]');
title.value = '������ '+ str + ' �������� � �������������';
var description = document.querySelector('textarea[name="descr"]');
description.value = '������ ' + str + ' �� �������� ���� � ������������� � �� ������ �� �������������. � ���������!' 
var reference = document.querySelector('textarea[name="rewrite"]');
console.log("------------DONE-------------\n");
console.log('https://www.tde66.ru/'+reference.value);	
}

function changeStr(){
var mainLine = document.querySelector('input[name="name"]');
var arr = mainLine.value.split(' ');
var change = ["�������:"];
for(let i=0; i<arr.length ; i++){
	if (arr[i] != arr[0]) change.unshift(arr[arr.length - i]);
}
change.push(arr[0]);
change = change.join(' ');
mainLine.value = change;	
}

(function addButton(){
var confirmButton = document.createElement('div');
confirmButton.onclick= fillMeta;
confirmButton.innerHTML ='<p>�������� title</p>';
confirmButton.className = 'btn btn_blue btn_small btn_supp';
document.getElementById('act').appendChild(confirmButton);

var confirmButton = document.createElement('div');
confirmButton.onclick= changeStr;
confirmButton.innerHTML ='<p>�������� �����</p>';
confirmButton.className = 'btn btn_blue btn_small btn_supp';
document.getElementById('act').appendChild(confirmButton);


})();

