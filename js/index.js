// like 18-07-11
var oTop = document.getElementsByClassName('top')[0];
var oH3 = oTop.getElementsByTagName('h3')[0];
oTop.onmousemove = function(){
	mouseMove();
	oTop.onmouseleave = function(){
		mouseLeave();
	}

}

function mouseMove(){
	oTop.style.background = '#ffac38';
	oH3.style.left = '-1500px';
}

function mouseLeave(){
oTop.style.background = '#0099FF';
	oH3.style.left = '0';
}