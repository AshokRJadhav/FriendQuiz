var readlineSync=require("readline-sync");
var userName=readlineSync.question("what is your nane: ");
console.log(userName);

console.log("Welcome " +userName+ " on my web page");

var age=readlineSync.question("what is your age ");

  if(age<35)
  {
    console.log("it is correct");
  }
  else
  {
    console.log("it is wrong");
  }

  function meet(que,ans)
  {
    var userAns=readlineSync.question(que);
    console.log(que);
  
  if(userAns==ans)
  {
    console.log("you are right");
  }
  
  else
  {
    console.log("you are Wrong");
  }
  }

var funResult=meet("where we meet at? ","delhi");
console.log(funResult);






