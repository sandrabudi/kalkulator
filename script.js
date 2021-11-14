function valuecal(result) {
    calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
})
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})
