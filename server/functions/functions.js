factorialize = (num) => {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
}

choose = (n, r) => {
    return (factorialize(n)/(factorialize(n-r)*factorialize(r)))
}

shuffle = (deck) => {
    let currentIndex = deck.length
    let randomIndex
    let tempValue

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        tempValue = deck[currentIndex]
        deck[currentIndex] = deck[randomIndex]
        deck[randomIndex] = tempValue
    }

    return deck
}

deal = (deck, players) => {
    let numPlayers = Object.keys(players).length
    let cardsToDeal = numPlayers*2
    shuffle(deck)

    for(i = 0; i < cardsToDeal; i ++) {
        players[i%numPlayers].push(cards[i])
    }

    return players
}
