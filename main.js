function calculator(){
  //When number is clicked, put into top section
  var numberButton = document.querySelectorAll('.buttonNum')
  for (var i = 0; i < numberButton.length; i++) {
    var button = numberButton[i]
    button.addEventListener('click', function(event){
      chosenNumbersAndOperators.push(this.innerHTML)
      document.getElementById('screen').innerHTML = chosenNumbersAndOperators.join('')
      console.log(chosenNumbersAndOperators)
    })
  }

  //This adds + to the array and to the top
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
  //Equals sign which will clear top section, join array

  var equalsButton = document.getElementById('equals')
  equalsButton.addEventListener('click', function(event){
    var numbersJoined = eval(chosenNumbersAndOperators.join(""));
    document.getElementById('screen').innerHTML = numbersJoined
    chosenNumbersAndOperators = [];
  })

  var clearButton = document.getElementById('clear')
  clearButton.addEventListener('click', av)

  //This function clears the array and the top section
  function joinArray(chosenNumbersAndOperators){
    return chosenNumbersAndOperators.join('')
  }
  function av(){
    document.getElementById('screen').innerHTML = ""
    chosenNumbersAndOperators = []
  }
  
  var chosenNumbersAndOperators = []
}

calculator()
