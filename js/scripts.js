$(document).ready(function () {
	function addItem() {
		// Input
		let inputValue = $("#input").val().trim();

		if (inputValue === "") {
			alert("Fart Noise");
		} else {
			// Creates a new list item to add it to the list
			let li = $("<li></li>").text(inputValue);
			$("#list").append(li);

			// Crossing an item out:
			li.on("dblclick", function () {
				$(this).toggleClass("strike");
			});

			// Adds the "X" delete button
			let crossOutButton = $("<button>X</button>");
			li.append(crossOutButton);

			// Removes the item when "X" is clicked
			crossOutButton.on("click", function () {
				$(this).parent().addClass("delete");
			});

			// Resets input field
			$("#input").val("");
		}

		// Click and hold to reorder items
		$("#list").sortable();
	}

	// When the "Add" button is clicked
	$("#button").on("click", addItem);

	// When the "Return" key is pressed inside the input field
	$("#input").on("keypress", function (e) {
		if (e.which == 13) {
			// "13" is the code for the Enter key because in the ASCII table, the "Carriage Return" is represented by the number 13
			addItem();
			e.preventDefault(); // Prevents the default action
		}
	});
});
