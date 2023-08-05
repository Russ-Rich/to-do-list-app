function newItem() {

  // 1. Adding a new item to the list:
  let inputValue = $('#input').val();

  if (inputValue === '') {
    alert("Bruh, you gotta write something!");
  } else {
    let li = $('<li></li>');
    li.append(inputValue);
    $('#list').append(li);

    // 2. Crossing out an item from the list:
    li.on("dblclick", function() {
      li.toggleClass("strike");
    });

    // 3(i). Adding the delete button "X":
    let crossOutButton = $('<crossOutButton>X</crossOutButton>'); 
    // Directly added 'X' instead of creating a text node. It's shorter and sweeter!
    li.append(crossOutButton);

    // 3(ii). Remove the item when "X" is clicked:
    crossOutButton.on("click", function() {
      li.addClass("delete");
    });
  }

  // 4. Reordering the items: 
  $('#list').sortable();
}