//document.getElementById("count-el").innerText = 5
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")





function increment(){
    count++
    countEl.innerText = count
    
}

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    count = 0
    countEl.textContent = count
    
}

