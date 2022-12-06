'use strict';

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

// 1

const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// 2
let dolphinsScore1 = 44;
let dolphinsScore2 = 23;
let dolphinsScore3 = 71;

let koalasScore1 = 65;
let koalasScore2 = 54;
let koalasScore3 = 49;

let averageDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let averageKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

console.log(averageDolphins, averageKoalas);

// 3 
function checkWinner(avgDolphins, avgKoalas) {
   let winner;
   let winnerScore;
   let loserScore;

   if (avgDolphins > avgKoalas) {
      winner = 'Dolphins';
      winnerScore = avgDolphins;
      loserScore = avgKoalas;
   } else {
      winner = 'Koalas';
      winnerScore = avgKoalas;
      loserScore = avgDolphins;
   }

   console.log(`${winner} win (${winnerScore} vs ${loserScore})`);
}

// 4

checkWinner(averageDolphins, averageKoalas);

dolphinsScore1 = 85;
dolphinsScore2 = 54;
dolphinsScore3 = 41;

koalasScore1 = 23;
koalasScore2 = 34;
koalasScore3 = 27;

averageDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
averageKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(averageDolphins, averageKoalas);
