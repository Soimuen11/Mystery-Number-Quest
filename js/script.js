// Define mystery number
const mystery = Math.ceil(Math.random() * 100)

// Number of attemps in one game
let attempts = 0;

// initializing player name with empty string
let player_name = new String();

// DOM manipulation
let panel_body1 = document.getElementById("panel-body1")
let button = document.getElementById("btn1");
let attempt_area = document.getElementById("panel-body2")
let advice_zone = document.getElementById("advice_zone")


// Get the name of current player
swal("Please enter your name:", {
	content: "input",
})
	.then((value) => {
		swal(`Welcome ${value}`);
		panel_body1.innerHTML = value
		player_name = value
		if (value == null || value.length == 0){
			panel_body1.innerHTML = "Anonymous"
		}
});

// Click event loop
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
		swal("Well done " + player_name + "!", " You have won in " + attempts + " attempts!")
	}else{
		advice_zone.innerHTML = "I don't get it. You sure it's a number?"
	}
})
