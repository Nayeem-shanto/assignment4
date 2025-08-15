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
console.log(totalFine(552));
