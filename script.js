function getFocus() {
  // Focus function called after alert´s Accept button is clicked
  document.getElementById('principal').focus()
}
function compute() {
  principal = document.getElementById('principal').value
  // check if principal´s value isn´t a 0 or a negative number
  if (principal <= 0) {
    alert('Enter a positive number')
    getFocus()
  } else {
    rate = document.getElementById('rate').value
    years = document.getElementById('years').value
    var interest = (parseInt(principal, 10) * years * parseInt(rate, 10)) / 100
    // Year Calculations
    var today = new Date()
    var year = today.getFullYear()
    var InterestYear = new Date()
    InterestYear.setFullYear(year + parseInt(years, 10))
    year = InterestYear.getFullYear()
    //Final Result
    var result = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of <mark>${rate}%</mark>.<br>You will receive an amount of <mark>${interest}</mark>,<br> in the year <mark>${year}</mark><br>`
    document.getElementById('result').innerHTML = result
  }
}

function rangechange() {
  // Function called everytime the range changes
  range = document.getElementById('rate').value
  document.getElementById('interest').innerHTML = range + '%'
}
