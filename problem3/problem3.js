function playingDomino(cards, deck) {
  let opt_card = [], legal = [], val1 = deck[0], val2 = deck[1];
    
  for (let card of cards) {
      if (card.includes(val1) || card.includes(val2)) {
          legal.push(card[0] + card[1]);
      } else {
          legal.push(0);
      }
  }
  if (Math.max(...legal) != 0) {
      return cards[legal.indexOf(Math.max(...legal))];
  } else {
      return [];
  }
}

module.exports = playingDomino;
