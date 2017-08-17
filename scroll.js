function rightPad(text, padding){
	for (i=0;i<=padding;i++){
		text += " ";
	}
	return text;
}
function leftShift(text){
	var newtext = "";
	for (i=0;i<text.length-1;i++){
		newtext += text[i+1];
	}
	newtext+=text[0]
	return newtext
}
function setup(title, speed){
	title = rightPad(title, 5);
	loop(title, speed);
}
function loop(title, speed){
	setInterval(function(){
		document.title = title;
		title = leftShift(title);
	}, speed);
}
