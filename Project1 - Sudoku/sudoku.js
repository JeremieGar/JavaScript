/*Nom: Sudoku.js - Jeremie Garzon
But du programme: Resoudre un sudoku par iteration */

load("grille");
load("sudoku-hard.js");
load("sudoku-hard-c.js");

var sudoku = function(grille){

    var statCounter;
    var possibleValues = [1,2,3,4,5,6,7,8,9];
    print("Sudoku original:");
    display(grille);

    for(stats(possibleValues)>81){
        for (var i = 0; i < 9; i++) {
            for (var j = 0; i < 9; j++) {
                if (grille[i][j] == "undefined"){
                    solve(i,j);
                    if (possibleValues.length == 1)
                        play(i ,j ,possibleValues[0]);               
                }
            }
        }
        display(grille);
    }
};

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
};


var stats = function(){
    for (var i = 0; i < 9; i++) {
        for (var j = 0; i < 9; j++) {
            if(grille[i][j] == "undefined"){
                solve(i,j);
                statCounter += possibleValues.length;
            }
            else
                statCounter++;
        }
    }
    
};

var solve = function(row, column){

    possibleValues = [1,2,3,4,5,6,7,8,9];

    //rowCheck - cherche dans la ligne
    for (var j=0; j < 9; j++) {
        if(grille[row][j] != "undefined" && !possibleValues.includes(grille[row][j]))
            possibleValues.splice(possibleValues.findIndex(grille[row][j]),1);
    }           

    //columnCheck - cherche dans la colonne
    for (var i=0; i < 9; i++) {
        if (grille[i][column] != "undefined" && !possibleValues.includes(grille[i][column]))
            possibleValues.splice(possibleValues.findIndex(grille[i][column]),1);
    }

    //boxCheck - cherche dans la case
    var boxRow = Math.floor(row / 3) * 3;
    var boxCol = Math.floor(col / 3) * 3;

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (grille[boxRow + i][boxCol + j] != "undefined" && !possibleValues.includes(grille[boxRow + i][boxCol + j]))
                possibleValues.splice(possibleValues.findIndex(grille[boxRow + i][boxCol + j]),1);
        }
    }
    return possibleValues;
};

var play = function(row, column, val){
    grille[row][column] = val;
};

