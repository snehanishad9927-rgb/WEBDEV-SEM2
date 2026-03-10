function calculateresult(){
  let n = document.getelementbyid("subjects").value;
  let total = 0 ;
  for(i=1;i<=n;i++){
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
  grade="B";
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

document.getElementById("total").innerText = total;
document.getElementById("average").innerText = total;
document.getElementById("grade").innerText = total;
document.getElementById("result").innerText = total;
}
