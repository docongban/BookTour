// auto increment counter
const total = document.querySelector('#counter-total')
const tour = document.querySelector('#counter-tour')
const happy = document.querySelector('#counter-happy')

function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }
  
document.addEventListener('DOMContentLoaded', function () {
    animateNumber(378, 10, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      total.innerText = formattedNumber
    })
    
    animateNumber(30, 100, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      tour.innerText = formattedNumber
    })
    
    animateNumber(2263, 5, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      happy.innerText = formattedNumber
    })
})