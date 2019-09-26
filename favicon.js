// добавить в файл <img src="Ваш_путь" id="faviconka"/>
window.onload = ()=>{
	 canvas = document.querySelector('canvas'),
     context = canvas.getContext('2d');
	 n = 1;
	 rightPos = false;
	 leftPos = true;
	 favicon = document.querySelector('link[rel*="icon"]');
    if (!!context) {
      setInterval(drawFavicon, 30);
  }
}

function drawFavicon(){
	context.save();
	context.translate(16,16);
	context.rotate(n*Math.PI/180); 
	var img = document.getElementById('faviconka');
	let imgInCanvas = context.drawImage(img,-16,-16);
	favicon.href =canvas.toDataURL('image/png');
	context.restore();
	if(leftPos && n < 45){
		n++;
	}
	else if (leftPos){
		leftPos = false;
		rightPos = true;
	}
	else if (rightPos && n > -45){
		n--;
	}
	else{
		leftPos = true;
		rightPos = false;
	}
}