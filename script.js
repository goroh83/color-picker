var squaresNum = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');


easyBtn.addEventListener('click', function() {
    this.classList.add('selected');
    hardBtn.classList.remove('selected');
    squaresNum = 3;
    colors = generateRandomColors(squaresNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display ='none';
        }
    }
})

hardBtn.addEventListener('click', function() {
    this.classList.add('selected');
    easyBtn.classList.remove('selected');
    squaresNum = 6;
    colors = generateRandomColors(squaresNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display ='block';
        }
})

resetButton.addEventListener('click', function(){
    colors = generateRandomColors(squaresNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#293249";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listener to squares
    squares[i].addEventListener('click', function (){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            resetButton.textContent = "Play again?";
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#293249";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor =  color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r  + ", " + g + ", " + b + ")"
}
