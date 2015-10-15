/*

Preparing the website for use.

*/


/*Window*/

if (window.addEventListener){
	window.addEventListener('resize', fixColumns);
}	
else if (window.attachEvent) {
	window.attachEvent('onresize', fixColumns);
}




/*Language flags*/

fixColumns();
setFlagsEvents();
clickLangButt(0);


/*UpMenu*/

setUpMenuEvents();




/*Right Menus*/

setMenusEvents();




/*Table data*/

createTable(sortTableData(content.table, "ID"), dataTableHolder);
