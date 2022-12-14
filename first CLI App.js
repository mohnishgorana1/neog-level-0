console.log("Do You Know Me");

var readlineSync = require('readline-sync');

var username = readlineSync.question("What is your name ");
console.log("Welcome " + username + "\n "); 

console.log("Rules for game : \n* 1 point for correct answer \n* 1 negative for wrong answers ")


var score = 0;


function DYKM(ques,ans)
  {  
    var userans  = readlineSync.question(ques +" ");

    if(userans === ans)
    {
      console.log("Right");
      score = score + 1 ;
    }
    else
    {
      console.log("Wrong");
      score= score-1 ;
    }

    console.log("SCORE : " , score);
  }

console.log("Total Score = " , score);



var Questions = [
                { ques : "What is my Favourite Sport" , ans : "Cricket"},
                {ques : "What is my hometown city name" , ans : "Neemuch"},
                {ques : "What is my favourite sweets" , ans : "Gulab Jamun"},
                {ques : "What is my Age" , ans : "22"},
                {ques : "what is my nickname " , ans : "Monu"},
                {ques : "What i like Mountain or beach " , ans : "Mountain" }
               ]

for(var i=0;i<Questions.length; i++)
  {
    var currentQ = Questions[i];
    
    DYKM( currentQ.ques , currentQ.ans );
  }



