var primaryArray = [];
var reg = /\.pdf$/;
var row = document.querySelector('.r_table2-row.r_table2-row-content');



for(var i=0; i <row.parentElement.children.length - 1; i++){
	row = row.nextElementSibling;
	var childT = row.children[0].children[1].children[0].children[0].href;
	var clickToShow = row.children[0].children[2].children[0].children[0].click();
	if(childT.search(reg) == -1){
		let temporyArray = [];
		temporyArray.push(childT);
		clickToShow;
		setTimeout(function(){
		temporyArray.push(document.querySelector('div>table').rows[1].cells[1].children[0].href);
		primaryArray.unshift(temporyArray);
		if(document.querySelector('div>table').rows.length > 2){
			for(let li= 2; li < document.querySelector('div>table').rows.length; li++ ){
				let temporyArray =[];
				temporyArray.push( childT);
				temporyArray.push(  document.querySelector('div>table').rows[li].cells[1].children[0].href);
				primaryArray.unshift(temporyArray);
			}
		}
		
	}, 2000);
	}
}