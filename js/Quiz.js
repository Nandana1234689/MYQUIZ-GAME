class Quiz {
  constructor(){
    this.title = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
        console.log("this if is working")
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
background ("yellow")
    //write code to show a heading for showing the result of Quiz
    textSize(20)
    fill ("blue")
text ("*NOTE: Contestant who answered correct are highlighted in green color!",120,290)

this.title.html("Result Of The Quiz");
this.title.position(350, 70);
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()
//console.log(allContestants)
    //write condition to check if contestantInfor is not undefined
if (allContestants !=undefined){
for (var a in allContestants ){
  textSize(20)
  var cans = 2
  if(allContestants.contestant1.answer == 2){
  fill ("green")
  text (allContestants.contestant1.name+" : "+allContestants.contestant1.answer ,290, 330)

  }
  else {
    fill ("red")
    text (allContestants.contestant1.name+" : "+allContestants.contestant1.answer,290, 360)

  }


  if(allContestants.contestant2.answer == 2){
    fill ("green")
    text (allContestants.contestant2.name+" : "+allContestants.contestant2.answer ,290, 330)
  
    }
    else {
      fill ("red")
      text (allContestants.contestant2.name+" : "+allContestants.contestant2.answer,290, 360)
  
    }
//console.log(allContestants.contestant1.name)

}

}
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
