let color_order = ["red", "green", "blue"];
let balloon = document.querySelector(".balloon");

// expand
function expand() {
    balloon.style.width = (parseInt(balloon.style.width) + 10) + "px";
	balloon.style.height = (parseInt(balloon.style.height) + 10) + "px";
	balloon.style.backgroundColor = color_order[(color_order.findIndex((i) => i == balloon.style.backgroundColor) + 1) % 3];
	if (parseInt(balloon.style.width) > 420){
		balloon.style.width = "200px";
		balloon.style.height = "200px";
	}
}
function shrink() {
	balloon.style.backgroundColor = color_order[(3 + (color_order.findIndex((i) => i == balloon.style.backgroundColor) - 1)) % 3];
	if (parseInt(balloon.style.width) == 200){
		return;
    }
	balloon.style.width = (parseInt(balloon.style.width) - 5) + "px";
	balloon.style.height = (parseInt(balloon.style.height) - 5) + "px";
}