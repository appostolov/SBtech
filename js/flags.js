/*

Here are the functions for language menu events.

*/


/*Implements flags hover actions.*/
function onLangButt(n, mode){
	switch(mode){
		case "on":
			flagHover[n] = true;
			break;
		case "out":
			flagHover[n] = false;
			break;
	}
	
	for(var a = 0; a < flags.length; a ++){
		if(flagHover[a] === true){
			flags[a].src = "images/flag"+a+"_on.png";
		}else if(flagCklick[a] === false){
			flags[a].src = "images/flag"+a+"_off.png";
		}
	}
	return;
};

/*Implements flags click actions.*/
function clickLangButt(n){
	for(var a = 0; a < flags.length; a ++){
		if(a === n){
			flagCklick[a] = true;
			flags[a].src = "images/flag"+a+"_on.png";
		}else{
			flagCklick[a] = false;
			flags[a].src = "images/flag"+a+"_off.png";
		}
	}
	return;
};

/*Attach events to the flag elements.*/
function addFlagEvent(a){
	var a1 = a;
	if (flags[a1].addEventListener){
		
		flags[a1].addEventListener('mouseover', function(){
		onLangButt(a1, 'on');
		});
		flags[a1].addEventListener('mouseout', function(){
			onLangButt(a1, 'out');
		});
		flags[a1].addEventListener("click", function() {
			clickLangButt(a1);
		});
			
	}else if (flags[a1].attachEvent) {
		  
		flags[a1].attachEvent('onmouseover', function(){
			onLangButt(a1, 'on');
		});
		flags[a1].attachEvent('onmouseout', function(){
			onLangButt(a1, 'out');
		});
		flags[a1].attachEvent("onclick", function() {
			clickLangButt(a1);
		});
	
	}
	return;
};

/*Fixes columns to be with equal height.*/
function fixColumns(){
	var columns = new Array();
	columns[0] = document.getElementById("columnLeftContent");
	columns[1] = document.getElementById("columnRightContent");
	
	columns[0].style.height = "auto";
	columns[1].style.height = "auto";

	if(columns[0].offsetHeight > columns[1].offsetHeight){
		columns[1].style.height = columns[0].offsetHeight - 20 + "px";
	}else if(columns[1].offsetHeight > columns[0].offsetHeight){
		columns[0].style.height = columns[1].offsetHeight - 20 + "px";
	}
	return;
};

/*Attach events of the flag elements.*/
function setFlagsEvents(){
	
	for(var b = 0; b < flags.length; b ++){
		addFlagEvent(b);
	}
	return;
};