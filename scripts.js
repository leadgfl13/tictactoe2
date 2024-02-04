let player1 = createPlayer('P1','X')
 let player2 = createPlayer('P2', 'O')
 let player3 = createPlayer('tie', '=')
let body = document.getElementById('body')


// make a function for a start button that gets the players first, then when you submit the players, call the gabemboard object!
let start = (function(){
   let start = document.getElementById('start')
   start.innerHTML = 'Start Game'
   start.addEventListener('click',()=>{
    start.remove()
    let submit = document.getElementById('submit')
    submit.style.display = 'flex'
    document.getElementById('form')
    form.style.display = "flex"    
    })
})();

//make a function when a game is won to either go again, or restart with new players

function createPlayer(playername, mark){
    const marker = mark
    const name = playername
    return{name, marker}
}
 

function displayWinner(player){
    
    gamearea.style.filter = 'blur(10px)'
    hud.style.filter = 'blur(10px)'
    let winner = document.createElement('div')
    winner.setAttribute('id','winner')
    document.body.append(winner)
    let declare = document.createElement('div')
    declare.innerHTML = `Congratulations! ${player.name} has won!`
    winner.append(declare)
    let buttonhouse = document.createElement('div')
    buttonhouse.setAttribute('id','buttonhouse')
    winner.append(buttonhouse)
    let restart = document.createElement('button')
    buttonhouse.append(restart)
    restart.setAttribute('id', 'restart')
    restart.innerHTML = 'Restart'
    restart.addEventListener('click', ()=>{
        location.reload()
    })

    let playagain = document.createElement('button')
    buttonhouse.appendChild(playagain)
    playagain.setAttribute('id','playagain')
    playagain.innerHTML = 'Play Again'

    playagain.addEventListener('click', ()=>{
        hud.style.filter = 'none'
        gamearea.style.filter = 'none'
        winner.style.display = 'none'
        
        clear()
        
    })

}

function getPlayer1(){
    let playernamespace = document.getElementById('playername1')
     aname = playernamespace.value
    player1.name = aname
    playernamespace.value = ''
    return{player1}
}

function getPlayer2(){
    let playernamespace2 = document.getElementById('playername2')
     aname = playernamespace2.value 
     player2.name = aname
    playernamespace2.value =''
    return{player2}

}

function clear(){
    for(let i = 0; i<9; i++){
        square[i].innerHTML = ''
    }
}

//the actual gameboard.  Switches players on clicks, prevents clicks on 
//squares with text, and checks for a win on every click
const gameboard = (function(){
    let gamearea = document.getElementById('gamearea')
    let currentPlayer = player1
    let board = document.createElement('div')
    board.setAttribute('id','board')
     squares = []
    gamearea.append(board)
    let hud = document.createElement('div')
    hud.setAttribute('id', 'hud')
    document.body.append(hud)
    hud.innerHTML = `It's ${player1.name}'s turn`
    for(let i=0; i<9; i++){
        let square = document.createElement('div')
        square.setAttribute('id','square')
        squares.push(square)
        board.append(square)
        square.addEventListener('click',()=>{
            if(square.innerHTML){
                return
            }
            else{
            square.innerHTML = currentPlayer.marker
            if(currentPlayer == player1){
                currentPlayer = player2
                hud.innerHTML = `It's ${player2.name}'s turn`

            }
         else if (currentPlayer == player2){
            currentPlayer = player1   
            hud.innerHTML = `It's ${player1.name}'s turn`

                }    
        check() }}
        )
    }     
})

//logic for win conditions
function check(){
    if(squares[0].innerHTML == 'X' && squares[1].innerHTML == 'X' && squares[2].innerHTML == 'X' ||
    squares[3].innerHTML == 'X' && squares[4].innerHTML == 'X' && squares[5].innerHTML == 'X' ||
    squares[6].innerHTML == 'X' && squares[7].innerHTML == 'X' && squares[8].innerHTML == 'X'||
    squares[0].innerHTML == 'X' && squares[4].innerHTML == 'X' && squares[8].innerHTML == 'X' ||
    squares[2].innerHTML == 'X' && squares[4].innerHTML == 'X' && squares[6].innerHTML == 'X' ||
    squares[0].innerHTML == 'X' && squares[3].innerHTML == 'X' && squares[6].innerHTML == 'X'||
    squares[1].innerHTML == 'X' && squares[4].innerHTML == 'X' && squares[7].innerHTML == 'X' ||
    squares[2].innerHTML == 'X' && squares[5].innerHTML == 'X' && squares[8].innerHTML == 'X' 
    ){
        displayWinner(player1)
     clear()
    }
    if (squares[0].innerHTML == 'O' && squares[1].innerHTML == 'O' && squares[2].innerHTML == 'O' ||
     squares[3].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[5].innerHTML == 'O' ||
     squares[6].innerHTML == 'O' && squares[7].innerHTML == 'O' && squares[8].innerHTML == 'O'||
     squares[0].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[8].innerHTML == 'O' ||
     squares[2].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[6].innerHTML == 'O' ||
     squares[0].innerHTML == 'O' && squares[3].innerHTML == 'O' && squares[6].innerHTML == 'O'||
     squares[1].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[7].innerHTML == 'O' ||
     squares[2].innerHTML == 'O' && squares[5].innerHTML == 'O' && squares[8].innerHTML == 'O')
     {
        displayWinner(player2)
     clear()
     }
    else if (squares[0].innerHTML !='' && squares[1].innerHTML!='' && squares[2].innerHTML!='' && squares[3].innerHTML!=''
     && squares[4].innerHTML!='' && squares[5].innerHTML!='' &&squares[6].innerHTML!='' && squares[7].innerHTML!='' && squares[8].innerHTML!=''){
            displayWinner(player3)
            clear()   
             }
    }


//submit button gets players names
const button = document.getElementById('submit')
button.addEventListener('click',()=>{
    form.style.display = 'none'
submit.style.display = 'none'
    getPlayer1()
    getPlayer2()
    gameboard()

})

