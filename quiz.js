// Create a tree function that accepts a single object as an argument.
// The object has two key/value pairs from user input in a <input type="text"> field in the DOM.
// Tree should be shown in the console.

function myTree(tree) {
  var height = tree.rows;
  var char = tree.leaves;

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



// User can either press the enter key or click a button that is labeled "Grow your tree".
// Display an alert stating that both fields must have a value.

function inputAlert() {

  var tree = {
    rows: document.getElementById("height").value,
    leaves: document.getElementById("char").value
    }

  if (tree.rows === "" || tree.leaves === "") {
    alert ("I can't grow your tree unless you tell me how tall AND what you want for leaves! Try again.");
    }
    else {
    myTree (tree)
    }
};

var growButton = document.getElementById("growButton");

growButton.addEventListener("click", inputAlert);
addEventListener("keypress", onReturn);

function onReturn (e){
  if (e.keyCode == 13){
   inputAlert()
  }
}