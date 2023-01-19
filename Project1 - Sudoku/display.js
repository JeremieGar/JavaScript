var display = function(grille){

	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (grille[i][j] == undefined) 
				grille[i][j] = " ";
		}	
	}

	for(var i=0;i<9;i++){		
		if(i%3==0)
			print("  ---------   ---------   ---------  ");
			
		print("| " + grille[i][0] + " + " + grille[i][1] + " + "+ grille[i][2] +
			  " | "  + grille[i][3] + " + " + grille[i][4] + " + " + grille[i][5] + " | " 
			  + grille[i][6] + " + "+ grille[i][7] + " + "+ grille[i][8] + " |");			
	}
    print("  ---------   ---------   ---------  ");
}



var grille = [
    [1,undefined,undefined,3,undefined,undefined,9,5,2], // line 1
    [undefined,4,undefined,6,undefined,undefined,1,undefined,undefined], // line 2
    [3,undefined,undefined,1,undefined,undefined,undefined,undefined,undefined], // line 3
    [undefined,6,4,7,2,undefined,undefined,1,undefined], // line 4
    [8,7,undefined,9,undefined,6,undefined,2,4], // line 5
    [undefined,2,undefined,undefined,8,5,7,6,undefined], // line 6
    [undefined,undefined,undefined,undefined,undefined,1,undefined,undefined,7], // line 7
    [undefined,undefined,7,undefined,undefined,9,undefined,4,undefined], // line 8
    [2,3,9,undefined,undefined,4,undefined,undefined,1]  // line 9   
];

display(grille);