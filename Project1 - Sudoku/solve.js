var solve = function(row, col, trial){
	
	var counter;
		
	var possibleValues = [1,2,3,4,5,6,7,8,9];

	//rowCheck - cherche dans la ligne
	for (var j=0; j < 9; j++) {
		if (grille[row][j] == trial && !possibleValues.includes(trial))
			possibleValues.splice(possibleValues.findIndex(trial),1);
	}			

	//columnCheck - cherche dans la colonne
	for (var i=0; i < 9; i++) {
		if (grille[i][column] == trial && !possibleValues.includes(trial))
			possibleValues.splice(possibleValues.findIndex(trial),1);
	}
	
	//boxCheck - cherche dans la case
	var boxRow = Math.floor(row / 3) * 3;
    var boxCol = Math.floor(col / 3) * 3;
    
   	for (var i = 0; i < 3; i++) {
       	for (var j = 0; j < 3; j++) {
            if (grille[boxRow + i][boxCol + j] == trial && !possibleValues.includes(trial))
            	possibleValues.splice(possibleValues.findIndex(trial),1);
        }
    }


	counter += possibleValues.length;

	if (possibleValues.length == 1)
		grille[row][col] = possibleValues[0];
		
	return grille;
	return counter;
}