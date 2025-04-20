let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0
let incrementBtn = document.querySelector('.increment-btn')


function increment() {
    count = count + 1
    countEl.textContent = count
    
    incrementBtn.classList.add('active-btn')
    incrementBtn.textContent = 'Incrementing..'
 
}

function saveIncrement() {
    let previousEntries = count + ' - '
    incrementBtn.classList.remove('active-btn')
    incrementBtn.textContent = 'INCREMENT'
    saveEl.textContent += previousEntries
    count = 0
    countEl.textContent = 0

}

