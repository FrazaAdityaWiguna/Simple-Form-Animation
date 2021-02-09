function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down')

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling
            const parent = arrow.parentElement
            const nextForm = parent.nextElementSibling
            // console.log(input)

            //Check for validation
            if(input.type === "text" && validateChar(input)) {
                // console.log('Program is running well!')
                nextFromElement(parent, nextForm)
            } else if(input.type === 'email' && validateEmail(input)) {
                nextFromElement(parent, nextForm)
            } else if(input.type === 'password' && validateChar(input)) {
                nextFromElement(parent, nextForm)
            } else {
                parent.style.animation = 'shake .5s ease';
            }

            // Cara clear animasi setelah terpakai
            parent.addEventListener('animationend', () => {
                parent.style.animation= ''
            })
        })
    })
}

function validateChar(user){
    if(user.value.length < 8) {
        console.log('character must be more than 8')
        checkCharacter("rgb(235, 21, 21)")
    } else {
        checkCharacter("rgb(255, 165, 0)")
        return true
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(validation.test(email.value)) {
        checkCharacter("rgb(255, 165, 0)")
        return true
    } else {
        checkCharacter("rgb(235, 21, 21)")
    }
}

function nextFromElement(parent, nextForm) {
    parent.classList.add('inactive')
    parent.classList.remove('active')
    nextForm.classList.add('active')
}

function checkCharacter(color) {
    document.body.style.backgroundColor = color;
}

animatedForm()