function calculateResult(){
let n = parseInt(document.getElementById("subjects").value);
let total =0;
for(let i=0;i<n;i++){
  let marks = parseFloat(prompt("enter marks of subjects" + (i + 1)));
  total+=marks;
}
let average = total/n;
let grade;
if (average>=95){
grade ="A+";
}
else if(average>=90){
  grade="A";
}
else if(average>=85){
  grade="B";
}
else if(average>=80){
  grade="B+";
}

else if(average>=75){
  grade="C+";
}
else if(average>=70){
  grade="C";
}
else if(average>=65){
  grade="D+";
}
else if(average>=60){
  grade="D";
}
else if(average>=50){
  grade="E";
}

else {
  grade="fail";
}

document.getElementById("result").innerHTML = "average: " + average.toFixed(2) + "<br> grade : " + grade ;

}