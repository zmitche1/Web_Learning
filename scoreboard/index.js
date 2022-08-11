let homeEl = document.getElementById("homenum")
let homeNum = 0

let guestEl = document.getElementById("guestnum")
let guestNum = 0


function plusoneHome (){
    homeNum+=1
    homeEl.textContent = homeNum
}

function plustwoHome (){
    homeNum+=2
    homeEl.textContent = homeNum
}

function plusthreeHome (){
    homeNum+=3
    homeEl.textContent = homeNum
}

function plusoneGuest (){
    guestNum+=1
    guestEl.textContent = guestNum
}

function plustwoGuest (){
    guestNum+=2
    guestEl.textContent = guestNum
}

function plusthreeGuest (){
    guestNum+=3
    guestEl.textContent = guestNum
}