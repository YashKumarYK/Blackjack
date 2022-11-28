
let player = {
    name: "Per",
    chips: 145
}

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []

let msg = document.getElementById("ele-msg");
let s = document.getElementById("sum")
let crd = document.getElementById("cards")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    // We are considering the ace as the 11th number
    // if 11-13 return 10
    let randomno = Math.floor(Math.random()*13)+1
    if(randomno >10) return 10
    else if(randomno ===1) return 11
    else return randomno
}

function StartGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    rendergame()
}
function rendergame(){
    s.textContent = "sum: " + sum;
    crd.textContent = "Cards: "
    
    for( let i=0;i<cards.length; i++){
        crd.textContent += cards[i]+" "
    }

    if(sum<=20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    console.log(message)
    msg.textContent = message;
}

function newcard(){
    if(isAlive==true && hasBlackJack ==false){
        let card =getRandomCard();
        sum += card
        cards.push(card)
        rendergame()
    }
    
}