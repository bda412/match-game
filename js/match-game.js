var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
 
    var unplacedCards = [];
    
    for (var value=1; value <= 8; value++) {
        unplacedCards.push(value);
        unplacedCards.push(value);
    }
    
    var randomlyPlacedCards = [];
    
    while (unplacedCards.length > 0) {
        var randomIndex = Math.floor(Math.random() * unplacedCards.length);
        var placed = unplacedCards.splice(randomIndex, 1)[0];
        randomlyPlacedCards.push(placed);
        
    }
    
    return randomlyPlacedCards;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
    var bgImg = [
        url(../img/choochoo.jpg),
         url(../img/darla.jpg),
         url(../img/chama.jpg),
         url(../img/grace.jpg),
         url(../img/hodor.jpg),
         url(../img/iggy.jpg),
         url(../img/neuce.jpg),
         url(../img/ripley.jpg)
    ];
    
    $game.empty();
    
}

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};