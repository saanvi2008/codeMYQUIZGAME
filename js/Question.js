class Question{
    constructor(){

      this.button = createButton(" SUBMIT ");
      this.button.position(300,300);

    }
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        
      }

    display(){
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            //the value of name of the player will be registered in player.name
            contestant.name = this.input.value();
            //the playerCount will be increased everytime the new player comes
            contestantCount = contestantCount + 1;
            //similarly player will also increase so index and coutn both are equal
            contestant.index = contestantCount;
            //we have to also update the player 
            contestant.update();
            //also we have to update the playercount
            contestant.updateCount(contestantCount);
        

        var title = createElement("h1");
        title.html(" MY QUIZ GAME ");
        title.position(350,0);

        var question = createElement("h4");
        question.html(" Q - What belongs to you but is mostly used by others? ");
        question.position(80,100);

        var hint1 = createElement("h4");
        hint1.html(" 1. Your age ");
        hint1.position(80,125);

        var hint2 = createElement("h4");
        hint2.html(" 2. Your name ");
        hint2.position(80,145);

        var hint3 = createElement("h4");
        hint3.html(" 3. Your pen ");
        hint3.position(80,165);

        var hint4 = createElement("h4");
        hint4.html(" 4. Your books ");
        hint4.position(80,185);

        this.input1 = createInput("Enter Your Name Here..");
        this.input1.position(85,250);

        this.input2 = createInput("Enter Correct Option No.");
        this.input2.position(385,250);

        
    }

    }
