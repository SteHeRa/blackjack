//Dealing hands

function deal() {
    while(player._hand[0]) {    //make sure players hand is empty
        player._hand.pop();
    }
    while(dealer._hand[0]) {    //make sure dealers hand is empty
        dealer._hand.pop();
    }

    $("img").remove();          //remove any card png's from the window

    shuffle();                  //shuffle deck (throw away current deck and generate a new one then shuffle it)

    player._hand.push(deck.pop());
    player._hand.push(deck.pop());  //give player two cards
    player._score = player.hand.reduce((a, cV) => a.value + cV.value);  //calculate player score
    if(player.score === 22) {
        player.changeSoftAce(); // if player is dealt 2 aces change one of them to hard ace (value 1)
    }
    $("#playerScore").text(player.score);                               //sned player score to window
    $("<img>").attr("src", `assets/PNG-cards-1.3/${player.hand[0].img}`).addClass("card").appendTo("#playersHand");
    $("<img>").attr("src", `assets/PNG-cards-1.3/${player.hand[1].img}`).addClass("card").appendTo("#playersHand"); //send card images to window

    dealer._hand.push(deck.pop());  
    dealer._hand.push(deck.pop());  //give dealer two cards
    dealer._score = dealer.hand.reduce((a, cV) => a.value + cV.value);  //calculate dealer score
    if(dealer.score === 22) {
        dealer.changeSoftAce(); // if dealer is dealt 2 aces change one of them to hard ace (value 1)
    }
    $("#dealerScore").text(dealer.hand[0].value);                               //send value of dealers first card to the window
    $("<img>").attr("src", `assets/PNG-cards-1.3/${dealer.hand[0].img}`).addClass("card").appendTo("#dealersHand"); //send card images to window
    $("<img>").attr("src", `assets/PNG-cards-1.3/back.png`).addClass("card").attr('id', 'hiddenCard').appendTo("#dealersHand"); //dealers second card is hidden as per rules of blackjack
    $("#dealBtn").attr("disabled", true);   
    $("#hitBtn").attr("disabled", false);
    $("#standBtn").attr("disabled", false); //disable deal button and enable hit & stand buttons

    $("#narratorText").text("Hit or Stand?");
}