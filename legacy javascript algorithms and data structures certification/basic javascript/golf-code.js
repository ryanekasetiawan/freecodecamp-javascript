/*
Golf Code

In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. 
Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

strokes 1 = "Hole-in-one"
strokes <= par -2 = "Eagle"
strokes par - 1 = "Birdie"
strokes par = "Par"
strokes par +1 = "Bogey"
strokes par + 2 = "Double Bogey"
strokes >= par + 3 = "Go Home!"
*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  
  let score = strokes - par;
 
  if (strokes === 1) {
    return names[0];
  } else if (score <= -2) {
    return names[1];
  } else if (score === -1) {
    return names[2];
  } else if (score === 0) {
    return names[3];
  } else if (score === 1) {
    return names[4];
  } else if (score === 2) {
    return names[5];
  } else {
    return names[6];
  }

}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));
