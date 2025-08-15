/* Problem-1 */
function totalFine( fare ) {
         const fine= (fare + (fare*0.2)+30);
         if(typeof(fare) === 'number' && fare > 0){
            return fine;
         }
         else{
            return "Invalid";
         }
}

/* problem-2 */

function  onlyCharacter( str ) {
    if(typeof(str)!== "string"){
        return "Invalid";
        

    }   
    else{
      const splitCharacter = str.split(" ");
      const joinCharacter = splitCharacter.join("");
      const upperCase = joinCharacter.toUpperCase();
      return upperCase;
    }   
}

/* Problem-3 */
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

/* problem-4 */
function  isSame(arr1 , arr2 ) {
         if(Array.isArray(arr1) === false || Array.isArray(arr2)=== false){
            return "Invalid";
         }
         else{
            for(let i=0; i<arr1.length; i++){
                if(arr1[i]!== arr2[i]){
                    return false;
                }
            }
         }
         return true;
}

/* Problem-5 */
