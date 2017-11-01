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

  //This section cycles through the opertions and adds to array and top
  var operatorButton = document.querySelectorAll('.operator')
  for (var i = 0; i < operatorButton.length; i++) {
    var operator = operatorButton[i]
    operator.addEventListener('click',function(event){
      chosenNumbersAndOperators.push(this.innerHTML)
      document.getElementById('screen').innerHTML = chosenNumbersAndOperators.join('')
    })
  }

  //This adds the answer to the top and then resets the array to empty
  var equalsButton = document.getElementById('equals')
  equalsButton.addEventListener('click', function(event){
    var numbersJoined = eval(chosenNumbersAndOperators.join(""));
    document.getElementById('screen').innerHTML = numbersJoined
    chosenNumbersAndOperators = [];
  })

  //This clears the top and array using the av function
  var clearButton = document.getElementById('clear')
  clearButton.addEventListener('click', av)

  //This function clears the array and the top section
  function joinArray(chosenNumbersAndOperators){
    return chosenNumbersAndOperators.join('')
  }
  
  //This is used to clear the top and array
  function av(){
    document.getElementById('screen').innerHTML = ""
    chosenNumbersAndOperators = []
  }
  var chosenNumbersAndOperators = []
}




calculator()
