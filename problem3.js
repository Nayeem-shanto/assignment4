/* const team1 ={
    name : "Brazil",
    foul : 15,
    cardY: 10,
    cardR: 0
}
const team2={
    name: "Argentina",
    foul: 16,
    cardY: 8,
    cardR: 12
}
const totalCardOfTeam1= (team1.foul+team1.cardY+team1.cardR);
const totalCardOfTeam2= (team2.foul+team2.cardY+team2.cardR);

console.log(team1, team2);
console.log(totalCardOfTeam1, totalCardOfTeam2)
if(totalCardOfTeam1 < totalCardOfTeam2){
    console.log(team1.name);
}
else if(totalCardOfTeam1 === totalCardOfTeam2){
    console.log("Tie")
}
else{
    console.log(team2.name);
} */

function bestTeam(player1, player2) {
  const totalCardOfplayer1 = player1.foul + player1.cardY + player1.cardR;
  const totalCardOfplayer2 = player2.foul + player2.cardY + player2.cardR;

  if (typeof (player1) === "object" && typeof (player2) === "object") {
    if (totalCardOfplayer1 < totalCardOfplayer2) {
      return player1.name;
    } else if (totalCardOfplayer1 === totalCardOfplayer2) {
      return "Tie";
    } else {
      return player2.name;
    }
  } else {
    return "Invalid";
  }
}

// // console.log(bestTeam({name: "Brazil", foul: 5, cardY: 3, cardR: 0} , {name: "Argentina", foul: 7, cardY:0, cardR:0}))
// console.log(bestTeam(50, 70));
// // console.log(bestTeam(["string"], ["string2"]));

// console.log(
//   bestTeam(
//     { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
//     { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
//   )
// );

// console.log(
//   bestTeam(
//     { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
//     { name: "France", foul: 10, cardY: 2, cardR: 1 }
//   )
// );

// console.log(
//   bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
// );

console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }

))
console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }))
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }))

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"



))