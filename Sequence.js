/*Nom: Sequence.js - Jeremie Garzon
But du programme: Trouver la plus longue sequence d'un meme nombre dans une 
				  chaine numerique */

var sequence = function (s) {
	var longueur = 0; //longueur de la sequence
	var resultat = 0; //index de la plus grande sequence
	var compteur = 0; //compteur temporaire des longueur (pour comparaison)
	for(var i=0; i<s.length;) {
		var j = i + 1; //index pour voir chiffres plus loins dans la sequences
		while(s[i] == s[j]) {
			compteur++;
			j++;
		}
        //si la sequence scanner est plus grande que la plus grande sequence
		if(compteur > longueur) { 
			longueur = compteur; //update de la variable
			compteur = 0;
			resultat = i;
		}
		i = j; //incrementation de i
	}
	return resultat;
};

sequence(prompt("Veuillez Entrer la Chaine Numerique: ").toString());