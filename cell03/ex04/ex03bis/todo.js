let new_button = $("#new_list");
let todo_list_div = $("#ft_list");

let todo_cookies = document.cookie;
if (todo_cookies.length !== 0) {
	todo_cookies = todo_cookies.split(";");
	todo_cookies.forEach((text) => {
		text = text.split("=");
		insert_new_list(text[0], text[1]);
	});
}

$(document).ready(function() {
	new_button.click(function() {
		let list_text = prompt("New todo list?");
		if (list_text.trim() === "") {
			return;
		}

		let id = new Date().getTime();
		document.cookie = id + "=" + list_text + ";";
		insert_new_list(id, list_text);
	});
});

function insert_new_list(id, text) {
	let todo = $("<button type='button'></button>").text(text);
	todo.click(function() {
		let is_confirm = confirm("Checked?");
		if (is_confirm) {
			todo.remove();
			document.cookie = id + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
		}
	});
	todo_list_div.prepend(todo);
}