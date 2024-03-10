const buttons = document.querySelectorAll('.button')

const characters = document.querySelectorAll('.character')

buttons.forEach((button, indice) => {
    button.addEventListener('click', () => {
        const selected = document.querySelector('.button.selected')
        selected.classList.remove('selected')
        button.classList.add('selected')

        const characterSelected = document.querySelector('.character.selected')
        characterSelected.classList.remove('selected')
        characters[indice].classList.add('selected')
    })
})
