function  onlyCharacter( str ) {
    // let splitCharacter =[];
    if(typeof(str)=== "string"){
        let splitCharacter= str.split('');
        return splitCharacter;
        

    }   
    else{
        return "Invalid";
    }   
}
console.log(onlyCharacter(" h e llo wor ld"));