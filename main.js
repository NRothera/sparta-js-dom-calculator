//When number is clicked, put into top section
var numberButton = document.querySelectorAll('.buttonNum')
for (var i = 0; i < numberButton.length; i++) {
  var button = numberButton[i]
  button.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = this.innerHTML
    chosenNumbersAndOperators.push(this.innerHTML)
    console.log(chosenNumbersAndOperators)
  })
}

var plusButton = document.getElementById('plus')
plusButton.addEventListener('click', function(event){
  event.stopPropagation()
  chosenNumbersAndOperators.push('+')
  document.getElementById('screen').innerHTML = '+'
})

//this add - to the array and to the top
var minusButton = document.getElementById('minus')
minusButton.addEventListener('click', function(event){
  event.stopPropagation()
  chosenNumbersAndOperators.push('-')
  document.getElementById('screen').innerHTML = '-'
})

//This adds / to the array and to the top
var divideButton = document.getElementById('divide')
divideButton.addEventListener('click', function(event){
  event.stopPropagation()
  chosenNumbersAndOperators.push('/')
  document.getElementById('screen').innerHTML = '/'
})

//This adds * to the array and to the top
var multiplyButton = document.getElementById('multiply')
multiplyButton.addEventListener('click', function(event){
  event.stopPropagation()
  chosenNumbersAndOperators.push('*')
  document.getElementById('screen').innerHTML = "*"
})

var chosenNumbersAndOperators = []
//Equals sign which will clear top section, join array
function equal(){
  var equalsButton = document.getElementById('equals')
  equalsButton.addEventListener('click', function(event){
    var numbersJoined = eval(chosenNumbersAndOperators.join(""));
    document.getElementById('screen').innerHTML = numbersJoined
    chosenNumbersAndOperators = []
  })
}
var clearButton = document.getElementById('clear')
clearButton.addEventListener('click', av)
equal()
//This function clears the array and the top section
function av(){
  chosenNumbersAndOperators = []
  document.getElementById('screen').innerHTML = ""
}

//AC, clear array and top section
