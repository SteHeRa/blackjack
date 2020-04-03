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

    get img() {
        return this._img;
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