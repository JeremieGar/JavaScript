/*Nom: split.js - Jeremie Garzon
But du programme: La fonction split() utilise un string/caractere 
				  "sep" pour couper un string "s" et retourne un tableau
				  ayant les elements de "s", sans les "sep" */

var split = function(s,sep){

	var start,end; //start et end sont simplement le premier et dernier index du sep dans le string
    var tempArray = Array();
    
    if(s.includes(sep) == true && s.charAt(0) !== sep)  //Ma facon de separer le string oubli toujours 
        tempArray[0] = s.substring(0,s.search(sep));    //la/les premieres lettres. Donc ce if s'en occupe et les ajoute

	for(var i=1; s.includes(sep) ;i++){
		
		start = s.search(sep);    
		end = start + sep.length;
       
        s = s.replace(sep,"-");    //Afin de separer le string sans changer les index, les separateurs sont remplacés par des '-'
        
        if(s.search(sep) !== -1)                                //Si la methode search ne trouve pas un sep,  
			tempArray.push(s.substring(end,s.search(sep)));     //search retourne la valeur -1, et donc le
        else                                                    //substring retournera tout sauf ce qu'on veut
            tempArray.push(s.substring(end, s.length));            
	}
    
    if(tempArray[tempArray.length-1] == "")     //Si le dernier char du string == sep, un "" sera ajouter a tempArray.
        tempArray.pop();						//Ce if enleve le "" si il existe
    
	s=tempArray;
	print(s);
};

