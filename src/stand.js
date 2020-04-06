function stand() {
    $("#dealBtn").attr("disabled", true);
    $("#hitBtn").attr("disabled", true);
    $("#standBtn").attr("disabled", true);
    
    $('#dealerScore').text(dealer.score);
    $('#hiddenCard').remove();
    $("<img>").attr("src", `assets/PNG-cards-1.3/${dealer.hand[1].img}`).addClass("card").appendTo("#dealersHand");
    while(dealer.score < 17) {
        dealer.hit();
    }

    if(player.score > dealer.score && player.score <= 21){
        $("#narratorText").text("Congratulations! You Win!");
        player.wins++;
        $("#playerWins").text(`${player.wins}`);
        console.log("Player Wins");
    } 

    else if(player.score < dealer.score && dealer.score <= 21) {
        $("#narratorText").text("Sorry. The dealer wins!");
        dealer.wins++;
        $("#dealerWins").text(`${dealer.wins}`);
        console.log("Dealer Wins");
    } 

    else if(player.score <= 21 && dealer.score > 21) {
        $("#narratorText").text("Dealer went bust! You win!");
        player.wins++;
        $("#playerWins").text(`${player.wins}`);
        console.log("Player Wins");
    }

    else if(player.score > 21) {
        $("#narratorText").text("You went bust! dealer wins!")
        dealer.wins++;
        $("#dealerWins").text(`${dealer.wins}`);
        console.log("Dealer Wins");
    }

    else if(player.score === dealer.score) {
        $("#narratorText").text("It's a tie!");
    }

    $("#dealBtn").attr("disabled", false).text("Play Again?");
}