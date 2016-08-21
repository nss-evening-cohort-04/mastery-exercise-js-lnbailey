// Create a tree function that accepts a single object as an argument.
// The object has two key/value pairs from user input in a <input type="text"> field in the DOM.
var growButton = document.getElementById("growButton");

function tree() {
  var height = document.getElementById("height").value;
  var char = document.getElementById("char").value;

  for (var i = 0; i < height; i++) {
    var str = ''; var space = (height - i);
    if (i == 0) {
    }

    str += ' '.repeat(space + 1);
    var zero = 2 * i + 1;
    str += char.repeat(zero);

    console.log(str);
  }
}

// 1. User can either press the enter key or click a button that is labeled "Grow your tree".
// 2. Tree should be shown in the console.
// 3. Display an alert stating that both fields must have a value.

function inputAlert() {
  var rows = document.getElementById("height").value;
  var leaves = document.getElementById("char").value;

  if (rows === "" || leaves === "") {
    alert ("I can't grow your tree unless you tell me how tall AND what you want for leaves! Try again.");
    }
    else {
    tree (rows, leaves)
    }
};


growButton.addEventListener("click", inputAlert);
addEventListener("keypress", onReturn);

function onReturn (e){
  if (e.keyCode == 13){
   inputAlert()
  }
}