//Dealing hands

function deal() {
    player._hand.push(deck.pop());
    player._hand.push(deck.pop());
    player._score = player.hand.reduce((a, cV) => a.value + cV.value);
    $("<img>").attr("src", `assets/PNG-cards-1.3/${player.hand[0].img}`).addClass("card").appendTo("#playersHand");
    $("<img>").attr("src", `assets/PNG-cards-1.3/${player.hand[1].img}`).addClass("card").appendTo("#playersHand");

    dealer._hand.push(deck.pop());
    dealer._hand.push(deck.pop());
    dealer._score = dealer.hand.reduce((a, cV) => a.value + cV.value);
    $("<img>").attr("src", `assets/PNG-cards-1.3/${dealer.hand[0].img}`).addClass("card").appendTo("#dealersHand");
    $("<img>").attr("src", `assets/PNG-cards-1.3/${dealer.hand[1].img}`).addClass("card").appendTo("#dealersHand");
}

document.getElementById("dealBtn").addEventListener("click", deal);

document.getElementById("hitBtn").addEventListener("click", () => {player.hit();});

function stick() {
    //when we stick - make sure all buttons are disabled
    while(dealer.score < 17) {
        dealer.hit();
    }
    if(player.score > dealer.score && player.score < 21){
        console.log("Congratulations! You Win!");
    }
    if(player.score < dealer.score && dealer.score < 21) {
        console.log("Sorry. The dealer wins...");
    }
    if(player.score === dealer.score) {
        console.log("It's a tie!")
    }
}

document.getElementById("stickBtn").addEventListener("click", stick);