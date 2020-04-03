//Player classes

class Player {
    constructor(name) {
        this._name = name;
        this._hand = [];
        this._score = 0;
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

    changeSoftAce() {
        for(let i = 0; i < this.hand.length; i++) {
            if(this.hand[i].rank === 'a' && this.hand[i].value === 11){
                console.log('soft ace in hand.');
                this.hand[i].value = 1;
                this.score = this.score - 10;
                console.log(`new score is ${this.score}`);
                break;
            } else if(i === this.hand.length -1) {
                console.log('You have no soft aces in your hand.')
            }
        }
        if(this.score > 21 && this.hand.some((element) => {element.rank === 'a' && element.value === 11})) { //THIS RECURSION REQUIRES MORE BUG TESTING
            this.changeSoftAce;
        }
    }

    hit() { //function pops a card from the top of the deck (end of the deck array) and pushes it into the Players hand.
        this.hand.push(deck.pop());
        this.score = this.score + this.hand[this.hand.length-1].value;  //score is recalculated

        $("<img>").attr("src", `assets/PNG-cards-1.3/${this.hand[this.hand.length-1].img}`).addClass("card").appendTo(`#${this.name}sHand`);

        if(this.score > 21) {
            console.log('score is greater than 21.');   //if the score is 21, code checks if player has a 'soft ace' in their hand
            this.changeSoftAce();                       //and then changes the aces value from 11 to 1.
        }
    }   //If the score exceeds 21 after a hit need to disable buttons and tell player they have lost
}

let player = new Player('player');
let dealer = new Player('dealer');
