var list_scores = [];
var score = 0;
var attempts = 0;

function game(){
    var mystery = Math.ceil(Math.random()*100);
    var player = prompt("Please, enter your name");
    //console.log(player);
    var user_nb = parseInt(prompt("Please input number:"))
    //console.log(user_nb);
    while(user_nb != mystery) {
        //console.log(player);
        console.log(user_nb);
        if (user_nb > mystery){
            prompt("It's -")
            var user_nb = parseInt(prompt("Please input number:"))
            attempts++ 
        }else if (user_nb > mystery){
            prompt("It's +")
            var user_nb = parseInt(prompt("Please input number:"))
            attempts++
        }else {
            prompt("Not A Number!")
            var user_nb = parseInt(prompt("Try again:"))
        }
    }
    prompt("Well played!")
}

function start_game() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Georgia";
    ctx.fillText("Hey Suckers!", 45,50);
    //game();
}



document.getElementById("panel-body1").innerHTML = score;
document.getElementById("panel-body2").innerHTML = attempts;
document.getElementById("btn1").onclick = start_game();


