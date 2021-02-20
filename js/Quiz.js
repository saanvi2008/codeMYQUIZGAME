class Quiz{
    constructor(){

    }

    display(){
        
    }

    getState(gameState){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();

            var contestantCountRef = await database.ref('contestantCount').once("value");

            if(contestantCountRef.exists()){
                contestantCountRef = contestantCountRef.val();
                contestant.getCount();
            }

            question = new Question();
            question.display();
        }
    }
}
