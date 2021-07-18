const selectedAll = document.querySelectorAll(".register__select");

selectedAll.forEach(selected => {
    const optionsContainer = selected.previousElementSibling

    const optionsList = optionsContainer.querySelectorAll('.register__option')

    selected.addEventListener('click', () => {
        if (optionsContainer.classList.contains('active')) {
            optionsContainer.classList.remove('active')
        } else {
            let currentActive = document.querySelector('.register__options-container.active')
            if (currentActive) {
                currentActive.classList.remove('active')
            }
            optionsContainer.classList.add('active');
        }
    })

    optionsList.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active')
        })
    })
})

