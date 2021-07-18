//  Range

document.getElementById("range").addEventListener("input", (event) => {
    let value = event.target.value;
    document.getElementById("current-value").innerText = value;
    document.getElementById("current-value").classList.add("active")
    document.getElementById("current-value").style.left = `${value / 4.1}%`
})

document.getElementById("range").addEventListener("blur", () => {
    document.getElementById("current-value").classList.remove("active")

})

// Selects

const selectedAll = document.querySelectorAll(".selected");


selectedAll.forEach(selected => {
    const optionsContainer = selected.previousElementSibling

    const optionsList = optionsContainer.querySelectorAll('.option')

    selected.addEventListener('click', () => {
        if (optionsContainer.classList.contains('active')) {
            optionsContainer.classList.remove('active')
        } else {
            let currentActive = document.querySelector('.options-container.active')
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

