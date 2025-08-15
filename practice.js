const numbers= [98,87,67,91,92,33,87];
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

