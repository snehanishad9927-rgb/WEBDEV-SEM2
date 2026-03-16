function calculateResult(){
  let n = document.getElementById("subjects").value;
  let total = 0 ;
  for(let i=1;i<=n;i++){
    let marks =parseFloat( prompt("enter marks for subject" + i));

    total= total + marks;

  }
let average=total/n;
let grade;
let result;
if(average>=90){
  grade="A+";
  result="pass";
}
else if (average>=75){
  grade="B+";
  result="pass";
}
else if (average>=60){
  grade="C";
  result="pass";
}
else if (average>=50){
  grade="D";
  result="pass";
}
else if (average>=40){
  grade="E";
  result="pass";
}
else if (average>=30){
  grade="F";
  result="fail";
}

document.getElementById("average").innerText = average;
document.getElementById("grade").innerText = grade;
document.getElementById("result").innerText = result;
}
