/*

Table data handlers.

*/

/*Sorts array of objects by column.*/
function sortTableData(arr, col){
	var newArr = new Array();
	for(var a = 0; a < arr.length; a ++){
		if(a === 0){
			newArr[0] = arr[0];
		}else{
			for(var b = 0; b < newArr.length; b ++){
				if(arr[a][col] < newArr[b][col]){
					newArr.splice(b,0,arr[a]);
					break;
				}else if(b === newArr.length - 1){
					newArr.push(arr[a]);
					break;
					
				}
			}
		}
	}
	return newArr;
};

/*Creates a table by array of objects and appends it to element.*/
function createTable(arr, par){
	
	var table = document.createElement('table');
	par.appendChild(table);
	
	var th;
	var tr;
	var td;
	
	tr = document.createElement('tr');
	table.appendChild(tr);
	
	for (var key in arr[0]) {
		th = document.createElement('th');
		th.innerHTML = key;
		tr.appendChild(th);
	}
	
	for(var a = 0; a < arr.length; a ++){
		tr = document.createElement('tr');
		table.appendChild(tr);
		
		for (var key in arr[a]) {
			td = document.createElement('td');
			td.innerHTML = arr[a][key];
			tr.appendChild(td);
		}
	}
	fixColumns();
	return;
};