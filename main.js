//When number is clicked, put into top section
var numberButton = document.querySelectorAll('.buttonNum')

for (var i = 0; i < numberButton.length; i++) {
  var button = numberButton[i]
  button.addEventListener('click', function(even){
    document.getElementById('screen').innerHTML = this.innerHTML
    chosenNumbers.push(this.innerHTML)
    console.log(chosenNumbers)
  })
}

//When number is clicked, store number in array
var chosenNumbers = []

//Equals sign which will clear top section, join array

//AC, clear array and top section
