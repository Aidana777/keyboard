const codeNumList = document.querySelectorAll(".code__num")
const codeInput = document.querySelector(".code__input")
const keyboardTag = document.querySelector(".keyboard")
const continueBtn = document.querySelector('.keyboard__submit')
const messageTag = document.querySelector('.message')

codeInput.onfocus = () => {
  keyboardTag.classList.add("keyboard--show")
  keyboardTag.style.visibility = 'visible';
}

codeInput.oninput = () => {
  codeNumList.forEach((numTag, i) => {
    numTag.textContent = codeInput.value[i] || ""
    numTag.classList.add("filled")
  })
}

const hideKeyboard = () => {
  keyboardTag.style.visibility = 'hidden';
}

continueBtn.onclick = () => {
  keyboardTag.classList.remove("keyboard--show")
  keyboardTag.addEventListener('transitionend', hideKeyboard)
  messageTag.classList.add('message--show')
  if(codeInput.value !== '7645') {
    messageTag.classList.add('message--error')
    messageTag.textContent = "Введен неверный код"
  } else {
    messageTag.textContent = "Введен верный код"
  }
  setTimeout(() => {
    messageTag.classList.remove('message--show')
    messageTag.classList.remove('message--error')
    keyboardTag.removeEventListener('transitionend', hideKeyboard)
  }, 3000)
}