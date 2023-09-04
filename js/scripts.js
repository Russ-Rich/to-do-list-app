$(document).ready(function () {
	// Function to add an item to the list
	function addItem() {
		const inputValue = $("#input").val().trim();

		if (inputValue === "") {
			showAlert("Please enter an item.");
		} else {
			const li = $("<li></li>").text(inputValue);

			li.on("dblclick", function () {
				$(this).toggleClass("strike");
			});

			const crossOutButton = $('<i class="far fa-trash-alt"></i>');

			crossOutButton.on("click", function () {
				$(this).parent().addClass("delete");
			});

			li.append(crossOutButton);
			$("#list").append(li);
			$("#input").val("");
		}

		$("#list").sortable(); // Click and hold to reorder items
	}

	// Event listener for clicking the "Add" button
	$("#button").on("click", addItem);

	// Event listener for pressing the "Return" key inside the input field
	$("#input").on("keypress", function (e) {
		if (e.which === 13) {
			addItem();
			e.preventDefault();
		}
	});

	// Custom alert function
	function showAlert(message) {
		$("#custom-alert").text(message).fadeIn().delay(2000).fadeOut();
	}
});
