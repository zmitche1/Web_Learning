let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let buttonEl = document.getElementById("button-el")

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = [];

let player = {name: "Per",
chips: 145}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chipships





function getRandomCard(min, max) {
    let card = Math.floor( Math.random()*13 ) + 1
    if (card === 1){
        return 11
    } else if (card > 10){
        return 10
    }
    else{
    return card
    }
}

function startGame(){
    let firstCard = getRandomCard(2,12)
    let secondCard = getRandomCard(2,12)
    sum = firstCard + secondCard
    cards = [firstCard,secondCard]
    hasBlackJack = false
    isAlive = true
    renderGame()
}

function renderGame()
{
    
    if (isAlive===true){
        returned = comparison(sum,hasBlackJack,isAlive)
        
        hasBlackJack = returned.hasBlackJack,
        isAlive = returned.isAlive,
        message = returned.message

        messageEl.textContent = message
        sumEl.textContent = "Sum: " + sum
        cardsEl.textContent = "Cards: " + cards
        console.log(sum, message)
        // if (isAlive === true){
        //     buttonEl.textContent = "Draw Card"
        //     returned = addCard(sum,cards)
        //     sum = returned[0]
        //     cards = returned[1]
        // }
        // buttonEl.textContent = "Reset Game"
    }
}

function comparison(sum,hasBlackJack,isAlive) {
    if (sum <= 20) {
        message = "Do you want to draw a new card? " + String.fromCodePoint(0x1F600)
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! " + String.fromCodePoint(0x1f973)
        hasBlackJack = true
        isAlive = false
    } else {
        message = "You're out of the game! " + String.fromCodePoint(0xe411)
        isAlive = false
    }
    return {hasBlackJack,isAlive,message};
}

function addCard(){
    if (isAlive === true && hasBlackJack === false){
    nextCard = getRandomCard(2,12)
    cards.push(nextCard)
    sum += nextCard
    renderGame()
    // return [sum,cards]
    }
}