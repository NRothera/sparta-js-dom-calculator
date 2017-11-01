//When number is clicked, put into top section
var numberButton = document.querySelectorAll('.buttonNum')

for (var i = 0; i < numberButton.length; i++) {
  var button = numberButton[i]
  button.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = this.innerHTML
    chosenNumbersAndOperators.push(this.innerHTML)
    
  })
}

//When number is clicked, store number in array

//Store operators in array

var plusButton = document.getElementById('plus')
plusButton.addEventListener('click', function(event){
  chosenNumbersAndOperators.push('+')

})

var minusButton = document.getElementById('minus')
plusButton.addEventListener('click', function(event){
  chosenNumbersAndOperators.push('-')

})

var divideButton = document.getElementById('divide')
plusButton.addEventListener('click', function(event){
  chosenNumbersAndOperators.push('/')

})

var multiplyButton = document.getElementById('multiply')
plusButton.addEventListener('click', function(event){
  chosenNumbersAndOperators.push('*')

})

var chosenNumbersAndOperators = []
//Equals sign which will clear top section, join array

//AC, clear array and top section
