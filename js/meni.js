var lc=true;
var zakleni=0;
function ani(){
    document.getElementById('meni1').className ='classname';
	document.getElementById('meni2').className ='classname';
	document.getElementById('bton').className ='classname2';
	document.getElementById('bton2').className ='classname2';
	document.getElementById('bton3').className ='classname2';
	document.getElementById('bton4').className ='classname2';
	document.getElementById('spodnji').className ='classname2';
	document.getElementById('zgornji').className ='classname2';
	document.getElementById('nazaj').className ='classname2';
	
}
function ani2(){
	document.getElementById('meni1').className ='classname';
	document.getElementById('meni2').className ='classname';
	document.getElementById('spodnji').className ='classname2';
	document.getElementById('zgornji').className ='classname2';
	document.getElementById('bton').className ='classname2';
	document.getElementById('nazaj').className ='classname2';
	lc=false;
}
function aniM(){
	document.getElementById('bton').className ='classname';
	document.getElementById('bton2').className ='classname2';
	zakleni=0;
}
function aniP(){
	document.getElementById('naslov').className ='premik';
	document.getElementById('zgornji').className ='classname2';
}
function aniN(){
	if(zakleni==0){
    document.getElementById('meni1').className ='classname1';
	document.getElementById('meni2').className ='classname1';
	document.getElementById('bton').className ='classname3';
	document.getElementById('bton2').className ='classname3';
	document.getElementById('bton3').className ='classname3';
	document.getElementById('bton4').className ='classname3';
	document.getElementById('spodnji').className ='classname3';
	document.getElementById('zgornji').className ='classname3';
	document.getElementById('nazaj').className ='classname3';
	document.getElementById('naslov').className ='premik2';
	}
}