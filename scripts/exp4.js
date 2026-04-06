function calculateResult(){
let n = parseInt(document.getElementById("subjects").value);
let total =0;
for(let i=0;i<n;i++){
  let x = parseFloat(prompt("enter marks of subjects" + (i + 1)));
  total+=x;
}
let average = total/n;
let grade;
if (average>=90){
grade ="A+";
}
else if(average>=80){
  grade="A";
}
else if(average>=70){
  grade="B";
}
else if(average>=60){
  grade="C";
}
else if(average>=50){
  grade="D";
}
else {
  grade="E";
}

document.getElementById("result").innerHTML = "average: " + average.toFixed(2) + "<br> grade : " + grade ;

}