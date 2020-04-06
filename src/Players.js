//Player classes

class Player {
    constructor(name) {
        this._name = name;
        this._hand = [];
        this._score = 0;
        this._wins = 0;
    }

    get name() {
        return this._name;
    }

    get hand() {
        if(this._hand.length == 0) {
            return undefined;
        }
        return this._hand;
    }

    get score() {
        return this._score;
    }

    set score(score) {
        this._score = score;
    }

    get wins() {
        return this._wins;
    }

    set wins(wins) {
        this._wins = wins;
    }

    hit() { //function pops a card from the top of the deck (end of the deck array) and pushes it into the Players hand.
        this.hand.push(deck.pop());
        this.score = this.score + this.hand[this.hand.length-1].value;  //score is recalculated

        $("<img>").attr("src", `assets/PNG-cards-1.3/${this.hand[this.hand.length-1].img}`).addClass("card").appendTo(`#${this.name}sHand`); //image of card is sent to window

        if(this.score > 21) {
            console.log(`${this.name} score is greater than 21.`);   //if the score is greater than 21, code checks if player has a 'soft ace' in their hand
            this.changeSoftAce();                       //and then changes the aces value from 11 to 1.
        }
        $(`#${this.name}Score`).text(`${this.score}`);
    }

    changeSoftAce() {
        for(let i = 0; i < this.hand.length; i++) {
            if(this.hand[i].rank === 'a' && this.hand[i].value === 11){
                console.log('soft ace in hand.');
                this.hand[i].value = 1;
                this.score = this.score - 10;
                console.log(`${this.name} new score is ${this.score}`);
                break;
            } else if(i === this.hand.length -1) {
                console.log(`${this.name} has no soft aces in their hand.`)
            }
        }
        if(this.score > 21 && this.hand.some((element) => {element.rank === 'a' && element.value === 11})) {    //recursion in case score is still above 21
            this.changeSoftAce;
        } 
        else if (this.score > 21){
            $("#hitBtn").attr("disabled", true);
            $("#standBtn").attr("disabled", true);
            if(this.name === 'player') {    //If the player goes bust run the stand function
                stand();                    //(this is here to avoid stand function running twice when the dealer goes bust)
            }
            if(this.name === 'dealer') {
                $("#narratorText").text("You went bust! dealer wins!");
            }
        }
    }
}

let player = new Player('player');
let dealer = new Player('dealer');
