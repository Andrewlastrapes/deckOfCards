
var $deal = $(".deal");
var $flop = $(".flop")
var $card1 = $(".card1")
var $card2 = $(".card2")
var $card3 = $(".card3")
var $card4 = $(".card4")
var $card5 = $(".card5")
var $one = $(".one")
var $two = $(".two")









function append(c, source,){
	var first = $('<img />', {
		"class": c,
		"src": source
	});
	$(c).empty();
	first.appendTo($(c))
}





// function append2(){
// 	var c = []

// 	for (var i = 1; i < 5; i++){
// 	c.push("$card" + i)
// 	append(c,"cardImages/" + deck[i] + ".png")
	
// 	}


// }



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


function flop(){
	var spades = makeSuit("Spades")
	var diamonds = makeSuit("Diamonds")
	var hearts = makeSuit("Hearts")
	var clubs = makeSuit("Clubs")
	var deck = spades.concat(diamonds, hearts, clubs)
	deck.sort()
	shuffleDeck(deck);
	append($one, ("cardImages/" + deck[3] + ".png")) 
	append($two, ("cardImages/" + deck[4] + ".png"))
	append($card1, ("cardImages/" + deck[0] + ".png"))
	append($card2, ("cardImages/" + deck[1] + ".png"))
	append($card3, ("cardImages/" + deck[2] + ".png"))
	return deck.slice(0, 3)
	
	
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

	



function click(thebutton){
	thebutton.on("click", function(event){
		event.preventDefault();
		console.log(flop());


		

	})
}

click($flop)
