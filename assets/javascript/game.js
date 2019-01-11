var rickHealth = 100;
//Rick starts at 100 and begins attack power with -20

var mortyHealth = 100;
//Morty starts at 100 and begins attack power with -10

// All Rick's opponents have a set health
var jerryHealth = 120;
var snowballHealth = 140;
var evilRickHealth = 200;

//All Morty's opponents have a set health 
var scaryTerryHealth = 140;
var mrGoldenfoldHealth = 75;
var evilMortyHealth = 180;

//Fighters attack power
var rickPower = 25;
var mortyPower = 15;

//Opponent attack power
var jerryPower = 7;
var snowballPower = 5;
var evilRickPower = 9;

var scaryTerryPower = 5;
var mrGoldenfoldPower = 4;
var evilMortyPower = 5;

//Booleans that declare who is fighting
var isRick = false;
var isMorty = false;

//Booleans that declare who Rick will fight
var fightingJerry = false;
var fightingSnowball = false;
var fightingEvilRick = false;

//Booleans that declare who Morty will fight
var fightingScaryTerry = false;
var fightingMrGoldenfold = false;
var fightingEvilMorty = false;

//A loop that loses health when

//When one button is clicked it hides other code all the way to the fight screen

$("#begin").click(function(){
    $("#welcome").hide();
    $("#character").show();
});

$("#rick").click( function(){
    isRick = true;
        $("#character").hide();
        $("#rickOption").show();

        console.log("You are fighting as Rick.");

            $("#jerry").click(function(){
                fightingJerry = true;
                $("#fight").show();
                $("#rickOption").hide();

                console.log("You chose to fight Jerry.");

                    if(isRick === true && fightingJerry === true){
                        $("#health").text(rickHealth);
                        $("#opponentHealth").text(jerryHealth);
                        $("#attackPower").text(rickPower);
                        $("#opponentAttackPower").text(jerryPower);
                        $("#rickFighter").show();
                        $("#jerryFighter").show();
                            $("#attack").click(function(){
                                jerryHealth -= rickPower;
                                rickHealth -= jerryPower;
                                $("#health").text(rickHealth);
                                $("#opponentHealth").text(jerryHealth);
                                    if(jerryHealth <= 0){
                                        $("#fight").hide();
                                        $("#winPage").show();
                                        $("#nextPage").click(function(){
                                            $("#winPage").hide();
                                            $("#rickOption").show();
                                            $("#jerry").hide();
                                            $("#jerryFighter").hide();
                                            fightingJerry = false;
                                        });
                                    };
                                    if(rickHealth <= 0){
                                        $("#fight").hide();
                                        $("#losePage").show();
                                        $("#tryAgain").click(function(){
                                            $("#losePage").hide();
                                            $("#rickOption").show();
                                        });
                                    };
                            });
                    };
            });

            $("#snowball").click(function(){
                fightingSnowball = true;
                $("#rickOption").hide();
                $("#fight").show();

                console.log("You chose to fight Snowball.");

                    if(isRick === true && fightingSnowball === true){
                        $("#health").text(rickHealth);
                        $("#opponentHealth").text(snowballHealth);
                        $("#attackPower").text(rickPower);
                        $("#opponentAttackPower").text(snowballPower);
                        $("#rickFighter").show();
                        $("#snowballFighter").show();
                            $("#attack").click(function(){
                                snowballHealth -= rickPower;
                                rickHealth -= snowballPower;
                                $("#health").text(rickHealth);
                                $("#opponentHealth").text(snowballHealth);
                                console.log("Snowball has: "+ snowballHealth + " life left.");
                                console.log("Rick has: " + rickHealth + " life left.");
                                    if(snowballHealth <= 0){
                                        $("#fight").hide();
                                        $("#winPage").show();
                                        $("#nextPage").click(function(){
                                            $("#winPage").hide();
                                            $("#rickOption").show();
                                            $("#snowball").hide();
                                            $("#snowballFighter").hide();
                                            fightingSnowball = false;
                                        });
                                    };

                                    if(rickHealth <= 0){
                                        $("#fight").hide();
                                        $("#losePage").show();
                                        $("#tryAgain").click(function(){
                                            $("#losePage").hide();
                                            $("#rickOption").show();
                                        });
                                    };
                            });
                    };
            });

            $("#evilRick").click(function(){
                fightingEvilRick = true;
                $("#rickOption").hide();
                $("#fight").show();

                console.log("You chose to fight Evil Rick.");

                if(isRick === true && fightingEvilRick === true ){
                    $("#health").text(rickHealth);
                    $("#opponentHealth").text(evilRickHealth);
                    $("#attackPower").text(rickPower);
                    $("#opponentAttackPower").text(evilRickPower);
                    $("#rickFighter").show();
                    $("#evilRickFighter").show();
                        $("#attack").click(function(){
                            evilRickHealth -= rickPower;
                            rickHealth -= evilRickPower;
                            $("#health").text(rickHealth);
                            $("#opponentHealth").text(evilRickHealth);
                            console.log("Evil Rick has: "+ evilRickHealth + " life left.");
                            console.log("Rick has: " + rickHealth + " life left.");
                                if(evilRickHealth <= 0){
                                    $("#fight").hide();
                                    $("#winPage").show();
                                    $("#nextPage").click(function(){
                                        $("#winPage").hide();
                                        $("#rickOption").show();
                                        $("#evilRick").hide();
                                        $("#evilRickFighter").hide();
                                        fightingEvilRick = false;
                                    });
                                };
                                if(rickHealth <= 0){
                                    $("#fight").hide();
                                    $("#losePage").show();
                                    $("#tryAgain").click(function(){
                                        $("#losePage").hide();
                                        $("#rickOption").show();
                                    });
                                };
                        });
                };
            });
    
});

$("#backCharacter").click(function(){
    $("#rickOption").hide();
    $("#character").show();
}); 

$("#morty").click(function(){
    isMorty= true;
    $("#character").hide();
    $("#mortyOption").show();
    console.log("You are fighting as Morty.");

        $("#scaryTerry").click(function(){
            fightingScaryTerry = true;
            $("#mortyOption").hide();
            $("#fight").show();

            console.log("You chose to fight Scary Terry.");

            if(isMorty && fightingScaryTerry){
                $("#health").text(mortyHealth);
                $("#opponentHealth").text(scaryTerryHealth);
                $("#attackPower").text(mortyPower);
                $("#opponentAttackPower").text(scaryTerryPower);
                $("#mortyFighter").show();
                $("#scaryTerryFighter").show();
                    $("#attack").click(function(){
                        scaryTerryHealth -= mortyPower;
                        mortyHealth -= scaryTerryPower;
                        $("#health").text(mortyHealth);
                        $("#opponentHealth").text(scaryTerryHealth);
                        console.log("Morty has: "+ mortyHealth + " life left.");
                        console.log("Scary Terry has: " + scaryTerryHealth + " life left.");
                            if(scaryTerryHealth <= 0){
                                $("#fight").hide();
                                $("#winPage").show();
                                $("#nextPage").click(function(){
                                    $("#winPage").hide();
                                    $("#mortyOption").show();
                                    $("#scaryTerry").hide();
                                });
                            };
                    });
            };
            
        });

        $("#mrGoldenfold").click(function(){
            fightingMrGoldenfold = true;
            $("#mortyOption").hide();
            $("#fight").show();

            console.log("You chose to fight Mr.Goldenfold.");

            if(isMorty && fightingMrGoldenfold){
                $("#health").text(mortyHealth);
                $("#opponentHealth").text(mrGoldenfoldHealth);
                $("#attackPower").text(mortyPower);
                $("#opponentAttackPower").text(mrGoldenfoldPower);
                $("#mortyFighter").show();
                $("#mrGoldenfoldFighter").show();
                    $("#attack").click(function(){
                        mrGoldenfoldHealth -= mortyPower;
                        mortyHealth -= mrGoldenfoldPower;
                        $("#health").text(mortyHealth);
                        $("#opponentHealth").text(mrGoldenfoldHealth);
                        console.log("Morty has: "+ mortyHealth + " life left.");
                        console.log("Mr.Goldenfold has: " + mrGoldenfoldHealth + " life left.");
                            if(mrGoldenfoldHealth <= 0){
                                $("#fight").hide();
                                $("#winPage").show();
                                $("#nextPage").click(function(){
                                    $("#winPage").hide();
                                    $("#mortyOption").show();
                                    $("#mrGoldenfold").hide();
                                });
                            };
                    });
            };
        });

        $("#evilMorty").click(function(){
            fightingEvilMorty = true;
            $("#mortyOption").hide();
            $("#fight").show();
            console.log("You chose to fight Evil Morty.");

            if(isMorty && fightingEvilMorty){
                $("#health").text(mortyHealth);
                $("#opponentHealth").text(evilMortyHealth);
                $("#attackPower").text(mortyPower);
                $("#opponentAttackPower").text(evilMortyPower);
                $("#mortyFighter").show();
                $("#evilMortyFighter").show();
                    $("#attack").click(function(){
                        evilMortyHealth -= mortyPower;
                        mortyHealth -= evilMortyPower;
                        $("#health").text(mortyHealth);
                        $("#opponentHealth").text(evilMortyHealth);
                        console.log("Morty has: "+ mortyHealth + " life left.");
                        console.log("Evil Morty has: " + evilMortyHealth + " life left.");
                            if(evilMortyHealth <= 0){
                                $("#fight").hide();
                                $("#winPage").show();
                                $("#nextPage").click(function(){
                                    $("#winPage").hide();
                                    $("#mortyOption").show();
                                    $("#evilMorty").hide();
                                });
                            };
                    });
            };

        });
});

$("#mortyBackCharacter").click(function(){
    $("#mortyOption").hide();
    $("#character").show();
});

//Fighting ring
