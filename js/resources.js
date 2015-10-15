/*

This file holds the global data available for the software functions.

*/





/*Language flags*/

var langMenu = document.getElementById("langMenu");
var flags = langMenu.childNodes;
var flagHover = [false, false, false];
var flagCklick = [false, false, false];

/*END*/



/*UpMenu*/

var gamesButton = document.getElementById("gamesButton");
var upMenuButton_Menu = document.getElementById("upMenuButton_Menu");
var upButtMenu = document.getElementById("upButtMenu");

var upMenuDown = false;
var upMenuHeight = gamesButton.offsetHeight;
var upMenuVell = 20;

var upMenuAct = false;

var upButtHLim = [gamesButton.offsetHeight, gamesButton.offsetHeight + upMenuButton_Menu.offsetHeight];

var upMenuOn = false;

/*END*/



/*Right Menus*/

var rightMenus = new Array();
rightMenus[0] = document.getElementById("MenuButton1");
rightMenus[1] = document.getElementById("MenuButton2");
rightMenus[2] = document.getElementById("MenuButton3");

var MenuButtonCo = new Array();
MenuButtonCo[0] = document.getElementById("MenuButtonCo1");
MenuButtonCo[1] = document.getElementById("MenuButtonCo2");
MenuButtonCo[2] = document.getElementById("MenuButtonCo3");

var menusAct = false;

var rMenuDown = [false, false, false];
var menuHeight = [rightMenus[0].offsetHeight, rightMenus[0].offsetHeight, rightMenus[0].offsetHeight];
var menuVell = 20;

/*END*/



/*Table data*/

var dataTableHolder = document.getElementById("dataTableHolder");

/*END*/