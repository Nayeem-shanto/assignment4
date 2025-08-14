function totalFine(fare){
    // const fine= (fare+ (fare *(20/100))+ 30);
    // return fine;
    const fine = (fare+ (fare *(20/100))+ 30);
    if(typeof(fare) === "number"){
        return fine;
    }
    else{
        return 'Invalid';
    }
}

console.log(totalFine('200'));