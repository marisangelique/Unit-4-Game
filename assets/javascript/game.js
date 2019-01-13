//Creating objects of all of the fighting characters in the game w/ boolean, health, and power.
const mainCharacter = {
    rick : {
        fighting : false,
        health : 100,
        power : 25,
    
},

    morty : {
        fighting : false,
        health : 100,
        power : 15
    }
}
 
//Creating object of all the opponents with the same factors.

const opponents = {
    jerry: {
        fighting : false,
        health : 120,
        power : 7
    },

    snowball: {
        fighting : false,
        health : 140,
        power : 5
    },

    evilRick : {
        fighting : false,
        health : 200,
        power : 9
    },

    scaryTerry : {
        fighting : false,
        health : 140,
        power : 5
    },

    mrGoldenfold : {
        fighting : false,
        health : 75,
        power : 4
    },

    evilMorty : {
        fighting : false,
        health: 180,
        power: 5
    }
};

//When one button is clicked it hides other code all the way to the fight screen

$("#begin").click(function(){
    $("#welcome").hide();
    $("#character").show();
});

$("#rick").click( function(){
    mainCharacter.rick.fighting = true;
        $("#character").hide();
        $("#rickOption").show();

        console.log("You are fighting as Rick.", mainCharacter.rick.fighting);
        

            $("#jerry").click(function(){
                opponents.jerry.fighting  = true;
                $("#fight").show();
                $("#rickOption").hide();

                console.log("You chose to fight Jerry.", opponents.jerry.fighting);
                
                    if(mainCharacter.rick.fighting === true &&  opponents.jerry.fighting === true){
                        $("#rickFighter").show();
                        $("#jerryFighter").show();
                        $("#health").text(mainCharacter.rick.health);
                        $("#opponentHealth").text(opponents.jerry.health);
                        $("#attackPower").text(mainCharacter.rick.power);
                        $("#opponentAttackPower").text(opponents.jerry.power);
                        console.log("Rick and Jerry are in battle");
                    };
            });

            $("#snowball").click(function(){
                opponents.snowball.fighting = true;
                $("#rickOption").hide();
                $("#fight").show();

                console.log("You chose to fight Snowball.", opponents.snowball.fighting);
                    
                    if(mainCharacter.rick.fighting === true &&  opponents.snowball.fighting === true){
                        $("#rickFighter").show();
                        $("#snowballFighter").show();
                        $("#health").text(mainCharacter.rick.health);
                        $("#opponentHealth").text(opponents.snowball.health);
                        $("#attackPower").text(mainCharacter.rick.power);
                        $("#opponentAttackPower").text(opponents.snowball.power);
                        console.log("Rick and Snowball are in battle");
                    };
            });

            $("#evilRick").click(function(){
                opponents.evilRick.fighting = true;
                $("#rickOption").hide();
                $("#fight").show();

                console.log("You chose to fight Evil Rick", opponents.evilRick.fighting);
                    
                    if(mainCharacter.rick.fighting === true &&  opponents.evilRick.fighting === true){
                        $("#rickFighter").show();
                        $("#evilRickFighter").show();
                        $("#health").text(mainCharacter.rick.health);
                        $("#opponentHealth").text(opponents.evilRick.health);
                        $("#attackPower").text(mainCharacter.rick.power);
                        $("#opponentAttackPower").text(opponents.evilRick.power);
                        console.log("Rick and Evil Rick are in battle");
                    };
            });
    
});

$("#backCharacter").click(function(){
    $("#rickOption").hide();
    $("#character").show();
}); 

$("#morty").click(function(){
    mainCharacter.morty.fighting= true;
    $("#character").hide();
    $("#mortyOption").show();
    console.log("You are fighting as Morty.", mainCharacter.morty.fighting);

        $("#scaryTerry").click(function(){
            opponents.scaryTerry.fighting = true;
            $("#mortyOption").hide();
            $("#fight").show();

            console.log("You chose to fight Scary Terry.", opponents.scaryTerry.fighting);
            
                if(mainCharacter.morty.fighting === true &&  opponents.scaryTerry.fighting === true){
                    $("#mortyFighter").show();
                    $("#scaryTerryFighter").show();
                    $("#health").text(mainCharacter.morty.health);
                    $("#opponentHealth").text(opponents.scaryTerry.health);
                    $("#attackPower").text(mainCharacter.morty.power);
                    $("#opponentAttackPower").text(opponents.scaryTerry.power);
                    console.log("Morty and Scary Terry are in battle");
                };
        });

        $("#mrGoldenfold").click(function(){
            opponents.mrGoldenfold.fighting = true;
            $("#mortyOption").hide();
            $("#fight").show();

            console.log("You chose to fight Mr.Goldenfold.", opponents.mrGoldenfold.fighting);

            if(mainCharacter.morty.fighting === true &&  opponents.mrGoldenfold.fighting === true){
                $("#mortyFighter").show();
                $("#mrGoldenfoldFighter").show();
                $("#health").text(mainCharacter.morty.health);
                $("#opponentHealth").text(opponents.mrGoldenfold.health);
                $("#attackPower").text(mainCharacter.morty.power);
                $("#opponentAttackPower").text(opponents.mrGoldenfold.power);
                console.log("Morty and Mr.Goldenfold are in battle");
            };
        });

        $("#evilMorty").click(function(){
            opponents.evilMorty.fighting  = true;
            $("#mortyOption").hide();
            $("#fight").show();
            console.log("You chose to fight Evil Morty.", opponents.evilMorty.fighting);

            if(mainCharacter.morty.fighting === true &&  opponents.evilMorty.fighting === true){
                $("#mortyFighter").show();
                $("#evilMortyFighter").show();
                $("#health").text(mainCharacter.morty.health);
                $("#opponentHealth").text(opponents.evilMorty.health);
                $("#attackPower").text(mainCharacter.morty.power);
                $("#opponentAttackPower").text(opponents.evilMorty.power);
                console.log("Morty and Evil Morty are in battle");
            };
        });
});

$("#mortyBackCharacter").click(function(){
    $("#mortyOption").hide();
    $("#character").show();
});

//Attack button that reduce health of the two characters
$("#attack").click(function(){
   if(mainCharacter.rick.fighting === true &&  opponents.jerry.fighting === true){
    opponents.jerry.health -= mainCharacter.rick.power;
    mainCharacter.rick.health -= opponents.jerry.power;
    $("#health").text(mainCharacter.rick.health);
    $("#opponentHealth").text(opponents.jerry.health);
    console.log("Jerry data here");

    if (opponents.snowball.health <= 0 && opponents.jerry.health <= 0 && opponents.evilRick.health <= 0){
        $("#fight").hide();
        $("#ultimateWinPage").show();
    } else if(opponents.jerry.health <= 0 ){
                opponents.jerry.fighting = false;
                $("#fight").hide()
                $("#winPage").show();
                $("#jerry").hide();
                $("#jerryFighter").hide();
                console.log("You have successfully eliminated Jerry.");

                $("#nextPage").click(function(){
                    $("#winPage").hide();
                    $("#rickOption").show();
                    mainCharacter.rick.power += 5;
                });

        } else if(mainCharacter.rick.health <= 0){
            $("#fight").hide();
            $("#losePage").show();
            console.log("Rick is dead.");
        
            $("#tryAgain").click(function(){
                $("#losePage").hide();
                $("#rickOption").show();
                $("#jerry").show();
                $("#snowball").show();
                $("#evilRick").show();
                mainCharacter.rick.health = 100;
                mainCharacter.rick.power = 25;
                opponents.jerry.health = 120;
                opponents.snowball.health = 140;
                opponents.evilRick.health = 200;
                opponents.jerry.fighting = false;
                opponents.snowball.fighting = false;
                opponents.evilRick.fighting = false;
            });
        } 
   }
   if(mainCharacter.rick.fighting === true &&  opponents.snowball.fighting === true){
    opponents.snowball.health -= mainCharacter.rick.power;
    mainCharacter.rick.health -= opponents.snowball.power;
    $("#health").text(mainCharacter.rick.health);
    $("#opponentHealth").text(opponents.snowball.health);
    console.log("Snowball data here");

    if (opponents.snowball.health <= 0 && opponents.jerry.health <= 0 && opponents.evilRick.health <= 0){
        $("#fight").hide();
        $("#ultimateWinPage").show();
    } else if(opponents.snowball.health <= 0 ){
            opponents.snowball.fighting = false;
            $("#fight").hide()
            $("#winPage").show();
            $("#snowball").hide();
            $("#snowballFighter").hide();
            console.log("You have successfully eliminated Snowball.");

            $("#nextPage").click(function(){
                $("#winPage").hide();
                $("#rickOption").show();
                mainCharacter.rick.power += 10;
            });

        } else if(mainCharacter.rick.health <= 0){
            $("#fight").hide();
            $("#losePage").show();
            console.log("Rick is dead.");
        
            $("#tryAgain").click(function(){
                $("#losePage").hide();
                $("#rickOption").show();
                $("#jerry").show();
                $("#snowball").show();
                $("#evilRick").show();
                mainCharacter.rick.health = 100;
                mainCharacter.rick.power = 25;
                opponents.jerry.health = 120;
                opponents.snowball.health = 140;
                opponents.evilRick.health = 200;
                opponents.jerry.fighting = false;
                opponents.snowball.fighting = false;
                opponents.evilRick.fighting = false;
            });
        } 

   }
   if(mainCharacter.rick.fighting === true &&  opponents.evilRick.fighting === true){
    opponents.evilRick.health -= mainCharacter.rick.power;
    mainCharacter.rick.health -= opponents.evilRick.power;
    $("#health").text(mainCharacter.rick.health);
    $("#opponentHealth").text(opponents.evilRick.health);
    console.log("Evil Rick data here");

    if (opponents.snowball.health <= 0 && opponents.jerry.health <= 0 && opponents.evilRick.health <= 0){
        $("#fight").hide();
        $("#ultimateWinPage").show();
    } else if(opponents.evilRick.health <= 0 ){
            opponents.evilRick.fighting = false;
            $("#fight").hide()
            $("#winPage").show();
            $("#evilRick").hide();
            $("#evilRickFighter").hide();
            console.log("You have successfully eliminated Evil Rick.");

            $("#nextPage").click(function(){
                $("#winPage").hide();
                $("#rickOption").show();
                mainCharacter.rick.power += 10;
            });

        } else if(mainCharacter.rick.health <= 0){
            $("#fight").hide();
            $("#losePage").show();
            console.log("Rick is dead.");
        
            $("#tryAgain").click(function(){
                $("#losePage").hide();
                $("#rickOption").show();
                $("#jerry").show();
                $("#snowball").show();
                $("#evilRick").show();
                mainCharacter.rick.health = 100;
                mainCharacter.rick.power = 25;
                opponents.jerry.health = 120;
                opponents.snowball.health = 140;
                opponents.evilRick.health = 200;
                opponents.jerry.fighting = false;
                opponents.snowball.fighting = false;
                opponents.evilRick.fighting = false;
            });
        }
   }
   if(mainCharacter.morty.fighting === true &&  opponents.scaryTerry.fighting === true){
    opponents.scaryTerry.health -= mainCharacter.morty.power;
    mainCharacter.morty.health -= opponents.scaryTerry.power;
    $("#health").text(mainCharacter.morty.health);
    $("#opponentHealth").text(opponents.scaryTerry.health);
    console.log("Scary Terry data here");
    
    if (opponents.scaryTerry.health <= 0 && opponents.mrGoldenfold.health <= 0 && opponents.evilMorty.health <= 0){
        $("#fight").hide();
        $("#winPage").hide();
        $("#ultimateWinPage").show();
    } else if(opponents.scaryTerry.health <= 0 ){
            opponents.scaryTerry.fighting = false;
            $("#fight").hide()
            $("#winPage").show();
            $("#scaryTerry").hide();
            $("#scaryTerryFighter").hide();
            console.log("You have successfully eliminated Scary Terry.");

            $("#nextPage").click(function(){
                $("#winPage").hide();
                $("#mortyOption").show();
                mainCharacter.morty.power += 10;
            });

        } else if(mainCharacter.morty.health <= 0){
            $("#fight").hide();
            $("#losePage").show();
            console.log("Morty is dead.");
        
            $("#tryAgain").click(function(){
                $("#losePage").hide();
                $("#mortyOption").show();
                $("#scaryTerry").show();
                $("#mrGoldenfold").show();
                $("#evilMorty").show();
                mainCharacter.morty.health = 100;
                mainCharacter.morty.power = 15;
                opponents.scaryTerry.health = 140;
                opponents.mrGoldenfold.health = 75;
                opponents.evilMorty.health = 180;
                opponents.scaryTerry.fighting = false;
                opponents.mrGoldenfold.fighting = false;
                opponents.evilMorty.fighting = false;
            });
        } 
   }
   if(mainCharacter.morty.fighting === true &&  opponents.mrGoldenfold.fighting === true){
    opponents.mrGoldenfold.health -= mainCharacter.morty.power;
    mainCharacter.morty.health -= opponents.mrGoldenfold.power;
    $("#health").text(mainCharacter.morty.health);
    $("#opponentHealth").text(opponents.mrGoldenfold.health);
    console.log("Mr.Goldenfold data here");

    if (opponents.scaryTerry.health <= 0 && opponents.mrGoldenfold.health <= 0 && opponents.evilMorty.health <= 0){
        $("#fight").hide();
        $("#ultimateWinPage").show();
    } else if(opponents.mrGoldenfold.health <= 0 ){
            opponents.mrGoldenfold.fighting = false;
            $("#fight").hide()
            $("#winPage").show();
            $("#mrGoldenfold").hide();
            $("#mrGoldenfoldFighter").hide();
            console.log("You have successfully eliminated Mr.Goldenfold.");

            $("#nextPage").click(function(){
                $("#winPage").hide();
                $("#mortyOption").show();
            });

        } else if(mainCharacter.morty.health <= 0){
            $("#fight").hide();
            $("#losePage").show();
            console.log("Morty is dead.");
        
            $("#tryAgain").click(function(){
                $("#losePage").hide();
                $("#mortyOption").show();
                $("#scaryTerry").show();
                $("#mrGoldenfold").show();
                $("#evilMorty").show();
                mainCharacter.morty.health = 100;
                mainCharacter.morty.power = 15;
                opponents.scaryTerry.health = 140;
                opponents.mrGoldenfold.health = 75;
                opponents.evilMorty.health = 180;
                opponents.scaryTerry.fighting = false;
                opponents.mrGoldenfold.fighting = false;
                opponents.evilMorty.fighting = false;
            });
        } 
   }
   if(mainCharacter.morty.fighting === true &&  opponents.evilMorty.fighting === true){
    opponents.evilMorty.health -= mainCharacter.morty.power;
    mainCharacter.morty.health -= opponents.evilMorty.power;
    $("#health").text(mainCharacter.morty.health);
    $("#opponentHealth").text(opponents.evilMorty.health);
    console.log("Evil Morty data here");

        
    if (opponents.scaryTerry.health <= 0 && opponents.mrGoldenfold.health <= 0 && opponents.evilMorty.health <= 0){
        $("#fight").hide();
        $("#ultimateWinPage").show();
    } else if(opponents.evilMorty.health <= 0 ){
                opponents.evilMorty.fighting = false;
                $("#fight").hide()
                $("#winPage").show();
                $("#evilMorty").hide();
                $("#evilMortyFighter").hide();
                console.log("You have successfully eliminated Evil Morty.");

                $("#nextPage").click(function(){
                    $("#winPage").hide();
                    $("#mortyOption").show();
                    mainCharacter.morty.power += 10;
                });

        } else if(mainCharacter.morty.health <= 0){
            $("#fight").hide();
            $("#losePage").show();
            console.log("Morty is dead.");
        
            $("#tryAgain").click(function(){
                $("#losePage").hide();
                $("#mortyOption").show();
                $("#scaryTerry").show();
                $("#mrGoldenfold").show();
                $("#evilMorty").show();
                mainCharacter.morty.health = 100
                mainCharacter.morty.power = 15;
                opponents.scaryTerry.health = 140;
                opponents.mrGoldenfold.health = 75;
                opponents.evilMorty.health = 180;
                opponents.scaryTerry.fighting = false;
                opponents.mrGoldenfold.fighting = false;
                opponents.evilMorty.fighting = false;
            });
        } 
   }
});



