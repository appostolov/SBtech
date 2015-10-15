/*

Right drop down menus actions.

*/

/*Click the menu*/
function rMenuClick(n){
	for(var a = 0; a < rightMenus.length; a ++){
		if(a === n){
			if(rMenuDown[a] === false){
				rMenuDown[a] = true;
				rightMenus[a].innerHTML = "Click to close<img class='arrowDown' src='images/arrowLeft.png' alt='' />";
			}else{
				rMenuDown[a] = false;
				rightMenus[a].innerHTML = "Click to open<img class='arrowDown' src='images/arrowDown.png' alt='' />";
			}
		}else{
			rMenuDown[a] = false;
			rightMenus[a].innerHTML = "Click to open<img class='arrowDown' src='images/arrowDown.png' alt='' />";
		}
	}
	if(menusAct === false){
		menusAct = true;
		menusAction();
	}
	return;
};

/*Manus animation*/
function menusAction(){
	var actList;
	var menuHeightLimits = [rightMenus[0].offsetHeight, rightMenus[0].offsetHeight + MenuButtonCo[0].offsetHeight];
	var menusInt = setInterval(function(){
		actList = false;
		for(var a = 0; a < rightMenus.length; a ++){
			if(rMenuDown[a] === false){
				if(menuHeight[a] > menuHeightLimits[0]){
					actList = true;
					menuHeight[a] -= menuVell;
				}else{
					menuHeight[a] = menuHeightLimits[0];
				}
			}else{
				if(menuHeight[a] < menuHeightLimits[1]){
					actList = true;
					menuHeight[a] += menuVell;
				}else{
					menuHeight[a] = menuHeightLimits[1];
				}
			}
			rightMenus[a].parentNode.style.height = menuHeight[a] + "px";
		}
		
		if(actList === false){
			menusAct = false;
			clearInterval(menusInt);
		}
		
	},17);
	return;
};

/*Adding events listeners to the menus.*/
function addMenuEvent(a){
	var a1 = a;
	if (rightMenus[a1].addEventListener){
		rightMenus[a1].addEventListener('click', function(){
			rMenuClick(a1);
		});
	}	
	else if (rightMenus[a1].attachEvent) {
		rightMenus[a1].attachEvent('onclick', function(){
			rMenuClick(a1);
		});
	}
	return
};

function setMenusEvents(){
	for(var a = 0; a < rightMenus.length; a ++){
		addMenuEvent(a);
	}
	return;
};