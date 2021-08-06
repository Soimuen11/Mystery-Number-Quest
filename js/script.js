// define mystery number
const mystery = Math.ceil(Math.random() * 100)
console.log(mystery)
// number of attemps in one game
let attempts = 0;
// get the name of current player
let player_name = prompt("Hello mate! Just enter a name alright!")
let panel_body1 = document.getElementById("panel-body1")
panel_body1.innerHTML = player_name

let button = document.getElementById("btn1");
let attempt_area = document.getElementById("panel-body2")
let advice_zone = document.getElementById("advice_zone")
// click event loop
button.addEventListener("click", function(){
	let player_input = document.getElementById("player_input").value
	let player_number = parseInt(player_input)
	attempts += 1
	attempt_area.innerHTML = attempts;
	if (player_number < mystery){
		advice_zone.innerHTML = "Go higher!"
	}else if (player_number > mystery){
		advice_zone.innerHTML = "Lower than that!"
	}else if(player_number == mystery){
		swal("Hey " + player_name + "!", " You have just won in " + attempts + " attempts!")
	}
	else{
		advice_zone.innerHTML = "I don't get it. You sure it's a number?"
	}
})
