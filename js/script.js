const name = [];
const list_attempts = [];
let attempts = 0;

function game(){
	let mystery = Math.ceil(Math.random()*100);
	let player = prompt("Please, enter your name");
	$('#panel-body1').html(player);
	name.push(player);
	let user_nb = parseInt(prompt("Please input number:"))
	while(user_nb != mystery) {
		if (user_nb > mystery){
			$('#game_area').html("it's -")
			user_nb = parseInt(prompt("Please input number:"))
			attempts++ 
		}else if (user_nb < mystery){
			$('#game_area').html("it's +")
			user_nb = parseInt(prompt("Please input number:"))
			attempts++
		}else {
			$('#game_area').html("NaN")
			user_nb = parseInt(prompt("Try again:"))
		}
	}
	$('#game_area').hmtl("Well played")
	console.log(attempts);
	list_attempts.push(attempts);
	$('#panel-body2').html(attempts);
}






