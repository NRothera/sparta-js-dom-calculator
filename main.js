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

//When number is clicked, store number in array

//Store operators in array

var plusButton = document.getElementById('plus')
plusButton.addEventListener('click', function(event){
  event.stopPropagation()
  chosenNumbersAndOperators.push('+')
  console.log(chosenNumbersAndOperators)

})
var minusButton = document.getElementById('minus')
minusButton.addEventListener('click', function(event){
  event.stopPropagation()
  chosenNumbersAndOperators.push('-')

})
var divideButton = document.getElementById('divide')
divideButton.addEventListener('click', function(event){
  event.stopPropagation()
  chosenNumbersAndOperators.push('/')

})
var multiplyButton = document.getElementById('multiply')
multiplyButton.addEventListener('click', function(event){
  event.stopPropagation()
  chosenNumbersAndOperators.push('*')
})

var chosenNumbersAndOperators = []
//Equals sign which will clear top section, join array

//AC, clear array and top section
