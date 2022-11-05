
homeScore = document.getElementById("homeScore-el") 
guestScore = document.getElementById("guestScore-el")
let homeS = 0
let guestS = 0


function homePlus1() {
    homeS += 1
    homeScore.textContent = homeS
}

function homePlus2() {
    homeS += 2
    homeScore.textContent = homeS
}

function homePlus3() {
    homeS += 3
    homeScore.textContent = homeS
}

function guestPlus1() {
    guestS += 1
    guestScore.textContent = guestS
}

function guestPlus2() {
    guestS += 2
    guestScore.textContent = guestS
}

function guestPlus3() {
     guestS += 3
    guestScore.textContent = guestS
}

function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeS = 0
    guestS = 0
}