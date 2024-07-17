/*
Counting Cards

In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. 
This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. 
When the count is zero or negative, the player should bet low

Count        Change	Cards
+1          2, 3, 4, 5, 6
0              7, 8, 9
-1	     10, 'J', 'Q', 'K', 'A'

*/
let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card <= 9) {
  } else {
    count--;
  }

  let decision = count > 0 ? "Bet" : "Hold";
  
  return count + " " + decision;
}

console.log(cc(2)); cc(3); cc(7); cc('K'); cc('A');
