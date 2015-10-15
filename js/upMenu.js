/*

Up-menu actions.

*/


/*Up-menu click action.*/
function upMenuClick(){
	if(upMenuDown === false){
		upMenuDown = true;
		gamesButton.innerHTML = "Games<img class='arrowDown' src='images/arrowLeft.png' alt='' />";
		gamesButton.style.background = "#000";
	}else{
		upMenuDown = false;
		gamesButton.innerHTML = "Games<img class='arrowDown' src='images/arrowDown.png' alt='' />";
		gamesButton.style.background = "#666";
	}
	if(upMenuAct === false){
		upMenuAct = true;
		upMenuAction();
	}
};

/*Drop down animation.*/
function upMenuAction(){
	var upActList;
	var upMenuInt = setInterval(function(){
		upActList = false;
		if(upMenuDown === true){
			if(upMenuHeight < upButtHLim[1]){
				upActList = true;
				upMenuHeight += upMenuVell;
			}else{
				upMenuHeight = upButtHLim[1];
			}
		}else{
			if(upMenuHeight > upButtHLim[0]){
				upActList = true;
				upMenuHeight -= upMenuVell;
			}else{
				upMenuHeight = upButtHLim[0];
			}
		}
		upButtMenu.style.height = upMenuHeight + "px";
		if(upActList === false){
			upMenuAct = false;
			clearInterval(upMenuInt);
		}
	},17);
};

/*Hover action*/
function upMenuHover(mode){
	switch(mode){
		case 'on':
			upMenuOn = true;
			break;
		case 'out':
			upMenuOn = false;
			break;
	}
	setHoverChange();
	return;
};

/*Hover changes*/
function setHoverChange(){
	if(upMenuDown === false){
		if(upMenuOn === true){
			gamesButton.style.background = "#000";
		}else{
			gamesButton.style.background = "#666";
		}
	}
	return;
};

/*Attach events to the menu.*/
function setUpMenuEvents(){
	if (gamesButton.addEventListener){
		gamesButton.addEventListener('mouseover', function(){
			upMenuHover("on");
		});
		gamesButton.addEventListener('mouseout', function(){
			upMenuHover("out");
		});
		gamesButton.addEventListener('click', upMenuClick);
	}	
	else if (gamesButton.attachEvent) {
		document.getElementById("pageTitle").innerHTML = "<img id='pageTitleIE' src='images/logoIE.png' alt='' />";
		
		gamesButton.attachEvent('onmouseover', function(){
			upMenuHover("on");
		});
		gamesButton.attachEvent('onmouseout', function(){
			upMenuHover("out");
		});
		gamesButton.attachEvent('onclick', upMenuClick);
	}
	upMenuAction();
	return;
};