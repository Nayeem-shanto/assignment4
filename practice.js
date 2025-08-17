/* const numbers= [98,87,67,91,92,33,87];
console.log(numbers);
let sum = 0;
let result ={};
for(const num of numbers){
    console.log(num);
    sum = sum+num;
}
console.log(sum);
const arrayLength = numbers.length;
console.log(arrayLength);


const finalScore = (sum / arrayLength);
console.log(finalScore);
const roundedResult = Math.round(finalScore);
console.log(roundedResult);

result.finalScore= roundedResult;
console.log(result);

for(const passSub of numbers){
    if(passSub >= 40){
        console.log(passSub.length);
    }
    
}

 */
/* 
function totalFine( fare ) {
         const fine= (fare + (fare*0.2)+30);
         if(typeof(fare) === 'number' && fare > 0){
            return fine;
         }
         else{
            return "Invalid";
         }
}
console.log(totalFine(200));
console.log(totalFine(50));
console.log(totalFine(0));
console.log(totalFine("35"));
console.log(totalFine(-50));
console.log(totalFine("gorib tai ticket kati nai"));
console.log(totalFine(552)); */

/* function  onlyCharacter( str ) {
    if(typeof(str)!== "string"){
        return "Invalid";
        

    }   
    else{
      const splitCharacter = str.split(" ");
      const joinCharacter = splitCharacter.join("");
      const upperCase = joinCharacter.toUpperCase();
      return upperCase;
    }   
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
console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }

))
console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }))
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }))

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
))
