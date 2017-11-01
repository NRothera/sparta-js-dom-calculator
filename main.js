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

  var operatorButton = document.querySelectorAll('.operator')
  for (var i = 0; i < operatorButton.length; i++) {
    var operator = operatorButton[i]
    operator.addEventListener('click',function(event){
      chosenNumbersAndOperators.push(this.innerHTML)
      document.getElementById('screen').innerHTML = chosenNumbersAndOperators.join('')
    })
  }

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
