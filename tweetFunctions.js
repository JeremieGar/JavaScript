/*Nom: tweetFunctions.js - Jeremie Garzon 20101031
				 - Omar Bhar 20146014
But du programme: Collection de fonctions utilisable sur des tweets */

load("tweets.js");

//getTweetsEcrisPar met tout les tweets d'un auteur precis dans un tableau
var getTweetsEcrisPar =  function(id){

	var compteur = Array();

	for(var i=0;i<tweets.length;i++){
		if (tweets[i].Auteur.ID == id){
			compteur.push(i);
		}
	}
	return compteur;
};

//getTweetsAvecHTag met tout les tweets ayant un HTag precisé dans un tableau
var getTweetsAvecHTag = function(tag){

	var compteur = Array();

	for(var i=0;i<tweets.length;i++){
		var check;
		for(var j=0; j<tweets[i].Hashtags.length;j++){
			if (tweets[i].Hashtags[j] == tag){
				check = true;
			}
			else
				check = false;

			if(check){
				compteur.push(i);
			}
		}
	}
	return compteur;
};

//getTweetsEcrisParAuteurPopulaire met tout les tweets par un auteur assez populaire dans un tableau
var getTweetsEcrisParAuteurPopulaire =  function(nb){

	var compteur = Array();

	for(var i=0;i<tweets.length;i++){
		if (parseInt(tweets[i].Auteur.Friend_Count) >= nb){
			compteur.push(i);
		}
	}
	return compteur;
};

//getTweetsEnReponseAuTweet met les tweets en reponse a un tweet specific dans un tableau
var getTweetsEnReponseAuTweet =  function(id){

	var compteur = Array();

	for(var i=0;i<tweets.length;i++){
		if (tweets[i].response_To_Tweet == id){
			compteur.push(i);
		}
	}
	return compteur;
};

//Fonction getHTag
var Affiche= function(Array){

	this.Array= Array;    

};


Affiche.prototype.stringAmess= function (){

  return "Auteur: " +  this.Array[0] + " nbr. de messages:  " + this.Array[1];// correspond aux indices de auteur et messages

};


var getAuteur = function(){
	var i=0; 
	var k=0;
	var kk;
	var m=[];
	for (i=0; i< tweets.length; i++){
		if( !(m.includes(tweets[i].Auteur.ID))){
			m.push([tweets[i].Auteur.ID]);   
			m[k].push(tweets[i].Text);
			m[k].push(tweets[i].Auteur.Nombre_de_Tweets);
			k++;
		}

		else {
			kk= m.indexOf(tweets[i].Auteur.ID);
			m[kk].push(tweets[i].Text);
		}

	}

var triBulle_0 = function(t) {// fonction de tribulle mais on compare la valeur des tableaux situes a leur indice:0

    	if (Array.isArray(t)) {  // avec locale Compare: envoie 1 ou -1 selon lordre lexicographique

    		var echange, passage = 1;

    		do {
    			echange = false;

    			for (var i=0; i<t.length-passage; ++i)
			if ((t[i][0].localeCompare(t[i+1][0]))=== -1) {// localeCompare pour le prochain element alindice 0
				swap(t,i,i+1);
				echange = true;
			}

			++passage;
		} while (echange);

		return t;
	}
	
};    



var mtri= triBulle_0(m);  


	var j=0;
	var a;
	var f=2;        
	var tweetn=1;    
	for (j; j< mtri.length; j++){
		tweetn=1;
		a= new Affiche(mtri[j]);

		print(a.stringAmess());

		while( f< mtri[j].length){
			print ( tweetn + ": " mtri[j][f]);
			tweetn++;
		}	
	}
};





var getHtags= function(nb){
	
	var help = function(n){    
		var tabmax=[];
		var i=0;
		var j=0;
    	var c=0;// compte longueur du tabmax
    	var count=0;//compte occurence
    	var k;
    	var v=0;
    	for(i=0;i<tweets.length;i++){
    		var Hlen= tweets[i].Hashtags.length;

    		for (j=0; j<Hlen; j++){
       		if(!(tabmax.includes(tweets[i].Hashtags[j]) )){ // si la valeur ninclut pas le tableau, on insere une nouvelle 
        		tabmax.push([tweets[i].Hashtags[j]]);// remarque: ajout de tableaux au seins meme de tableaux
        		c++;                                                            
        		k=i+1;	
        		count=0;
        		while (k<tweets.length){

        		while(v< tweets[k].length){
        			if (tweets[i].Hashtags[j] === tweets[k].Hashtags[v]) count++;
        			v++;
        		}
        		k++;
        		v=0;
        	}

			tabmax[c-1].push(count);// c-1= tabmax.length-1 

    		if(c===n) return tabmax; // retourne le tableau pour la longueur desire

			}// if

		}// for j


	}// for i

		return tabmax;    
};


	var triBulle_1 = function(t) {// fonction de tribulle mais on compare la valeur des tableaux situes a leur indice:1

		if (Array.isArray(t)) {

			var echange, passage = 1;

			do {
				echange = false;

				for (var i=0; i<t.length-passage; ++i)
			if (t[i][1] < t[i+1][1]) {// indice 1 et pour ordre croissant
				swap(t,i,i+1);
				echange = true;
			}

			++passage;
		} while (echange);

		return t;
	}
};    
return triBulle_1(help(nb));
};

//getHTagFrequency affiche les frequence des HTag
var getHTagFrequency = function (htag){
	var i=0;
	var j=0;
	var k=0;
	var v=0;
	var count=0;
    for(i=0;i<tweets.length;i++){
		var Hlen= tweets[i].Hashtags.length;
		k= i+1;	
	   		for (j=0; j<Hlen; j++){
    		if(tweets[i].Hashtags[j]=== htag ){
                
              while (k<tweets.length){
				
					while(v< tweets[k].Hashtags.length){
						if (tweets[i].Hashtags[j] === tweets[k].Hashtags[v]) count++;
						v++;
                	}
				k++;
                v=0;
				}  
             return count;   
            } // if
            }// for1        
    	}// for2
	return 0;
                
};


//Affiche les mots les plus frequents dans les tweets d'un auteur specific
var getWords = function(id, nb){

	var tweetsParId = "";
	var indexArray = getTweetsEcrisPar(id);

	for (var i = 0; i < indexArray.length; i++) {
		tweetsParId += " " + tweets[indexArray[i]].Text;
	}

	var words = tweetsParId.split(" ").sort();
	var wordsObject = {};

	for (var i=0; i<words.length; i++) {
    	var wordToCheck = words[i];

    	if (wordsObject[wordToCheck] == undefined) 
      		wordsObject[wordToCheck] = 1;

     	else       
      		wordsObject[wordToCheck] += 1;
    }
   	
   	var wordsEnOrdre = {};
    for (var i = 0; i < nb; i++) {
    	wordsEnOrdre[i] = Math.max(wordsObject); //trouve la plus haute valeure et l'envoi dans wordsEnOrdre 
    	
    }
    return wordsEnOrdre;
};

	
	

//fonction getChaines
var getChaines= function(nb){
    
var j=0;
var id;    
for (j=0; j< tweets.length; j++){
    
   if(tweets[j].response_To_Tweet!= -1){     
         id= tweets[i].response_To_Tweet;
       
         var helper =function (i,ideal,k,search){
            
          if((tweets[i].IdTweets=== ideal || search) && k>0){
              
              ideal= tweets[i].response_To_Tweet;   
          	  if (i< t.length-1) return helper(i+1,ideal,k-1,true);
            
          }
          
  
             
            
          if(k>0 )  return helper(i+1,ideal,k);
          
  
     	 }; 
     
	helper(0,id,nb,0); 

	}	       


};    

