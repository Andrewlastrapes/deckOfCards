



function makeSuit(s){
	var cards = []
	var faces = []
	for (var i = 2; i <= 11; i++){
		if (i > 10){
			faces[0] = ("J" + s);
			faces[1] = ("Q" + s);
			faces[2] = ("K" + s);
			faces[3] = ("A" + s);


		} else {
			cards.push(i + s)
		}
	}
	var suit = cards + "," + faces;
	return suit.split(",")
}


function makeDeck(){
	var spades = makeSuit("Spades")
	var diamonds = makeSuit("Diamonds")
	var hearts = makeSuit("Hearts")
	var clubs = makeSuit("Clubs")
	var deck = spades.concat(diamonds, hearts, clubs)
	deck.sort()
	shuffleDeck(deck);
	return deck
}

	
function shuffleDeck(array){
	var currentIndex = array.length, temporaryValue, randomIndex
	while(0 !== currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}





