//REORGANISE JAVASCRIPT - THIS IS STARTING TO GET MESSY

//GENERATING AND SHUFFLING DECK 

class Card {
    constructor(house, rank, value, img) {
        this._house = house;
        this._rank = rank;
        this._value = value;
        this._img = img;
        this._deckPosition = Math.random();
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get rank() {
        return this._rank;
    }
}

const deck = [];

for(let i = 0; i < 4; i++) {
    let house;
    switch(i) {
        case 0: 
            house = 'clubs';
            break;
        case 1:
            house = 'diamonds';
            break;
        case 2:
            house = 'hearts';
            break;
        case 3:
            house = 'spades';
    }
    for(let j = 0; j < 13; j++) {
        // let value = j+1;
        switch(j) {
            case 0: 
                value = 11;
                rank = 'a';
                img = `${house[0]}${rank}.png`;
                break;
            case 10:
                value = 10;
                rank = 'j';
                img = `${house[0]}${rank}.png`;
                break;
            case 11:
                value = 10;
                rank = 'q';
                img = `${house[0]}${rank}.png`;
                break;
            case 12:
                value = 10;
                rank = 'k';
                img = `${house[0]}${rank}.png`;
                break;
            default:
                value = j+1;
                rank = value;
                img = `${house[0]}${value}.png`;
            }

        deck.push(new Card(house, rank, value, img));
    }
}

deck.sort((a, b) => a._deckPosition-b._deckPosition);


//DEALING HANDS

class Player {
    constructor() {
        this._hand = [];
        this._score = 0;
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

    hit() {
        this.hand.push(deck.pop());
        this.score = this.score + this.hand[this.hand.length-1].value;
        if(this.score > 21) {
            console.log('score is greater than 21.');
            this.changeSoftAce();
        }
    }
}

let player = new Player();
let dealer = new Player();

function deal() {
    player._hand.push(deck.pop());
    player._hand.push(deck.pop());
    player._score = player.hand.reduce((a, cV) => a.value + cV.value);
    dealer._hand.push(deck.pop());
    dealer._hand.push(deck.pop());
    dealer._score = dealer.hand.reduce((a, cV) => a.value + cV.value);
}

deal();
console.log(deck);
console.log(player.hand);
console.log(player.score);
console.log(dealer.hand);
console.log(dealer.score);

player.hit();
console.log(deck);
console.log(player.hand);
console.log(player.score);
console.log(dealer.hand);
console.log(dealer.score);