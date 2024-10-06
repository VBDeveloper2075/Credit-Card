const inputCard = document.querySelector("#inputCard")
const inputDate = document.querySelector("#inputDate")
const inputCvv = document.querySelector("#inputCvv")

const maskNumber = "****-****-****-****"
const maskDate = "**/**"
const maskCvv = "***"

let cardNumber = [] 
let dateNumber = [] 
let cvvNumber = [] 

//cada vez que toque una tecla en el inputCard se ejecutara la funcion handleInput
inputCard.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  
  e.preventDefault() // para que no se escriba en el input
  handleInput(maskNumber, e.key, cardNumber)
  inputCard.value = cardNumber.join("")
})

              //se ejecuta la funcion handleInput
//cuanddo toque una tecla en el campo de fecha
inputDate.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  
  e.preventDefault() // para que no se escriba en el input
  handleInput(maskDate, e.key, dateNumber)
  inputDate.value = dateNumber.join("")
})

//cuando toque una tecla en cvv
inputCvv.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  
  e.preventDefault() // para que no se escriba en el input
  handleInput(maskCvv, e.key, cvvNumber)
  inputCvv.value = cvvNumber.join("")
})



//cada vez que toque una tecla en el inputCard se ejecutara la funcion handleInput
function handleInput(mask, key, arr) {
    let numbers = [
        "0","1","2","3","4","5","6","7","8","9"
    ]

    if (key === "Backspace" && arr.length > 0) {
        arr.pop()
        return
    }

    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
      if (mask[arr.length] === "-" || mask[arr.length] === "/") {
        arr.push(mask[arr.length], key)
    }else {
        arr.push(key)
    } 
  }
}