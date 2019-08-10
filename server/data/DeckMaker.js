let fs = require('fs')
const util = require('util')

let deck = []
let suit = ""
let rank = ""

for(let i = 1; i < 14; i++) {
    for(let j = 0; j < 4; j++) {
        if(i === 1) {
            rank = "A"
        }
        else if(i === 11) {
            rank = "J"
        }
        else if(i === 12) {
            rank = "Q"
        }
        else if(i === 13) {
            rank = "K"
        }
        else if(i > 1 && i < 11) {
            rank = i;
        }
        if(j === 0) {
            suit = "Diamonds"
        }
        else if(j === 1) {
            suit = "Clubs"
        }
        else if(j === 2) {
            suit = "Hearts"
        }
        else if(j === 3) {
            suit = "Spades"
        }

        deck.push({rank, suit})
    }
}

fs.appendFile('Deck.json', JSON.stringify(deck), (err) => {
    if(err) throw err
})