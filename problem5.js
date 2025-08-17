function resultReport(marks) {

    if(!Array.isArray(marks)){
        return "Invalid";
    }
    else{
        let finalObject = {};
  let allMarks = 0;
  let averageMarks = 0;
  let failSubject = 0;
  let passSubject = 0;
  for (let mark of marks) {
    allMarks = allMarks + mark;
    // console.log(allMarks);
    if (mark < 40) {
    //   console.log(mark);
      failSubject++;
    }
  }

  passSubject = marks.length - failSubject;
//   console.log(passSubject);
//   console.log(failSubject);
  averageMarks = Math.round(allMarks / marks.length);
//   console.log(averageMarks);

  finalObject.finalScore = averageMarks;
  finalObject.pass = passSubject;
  finalObject.fail = failSubject;
  return finalObject;
    }
  
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([]));
console.log(resultReport([99,87,67,12,87]));
console.log(resultReport([99]));
  console.log(resultReport(100));
