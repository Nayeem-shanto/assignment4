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
