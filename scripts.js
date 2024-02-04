let player1 = createPlayer('P1','X')
 let player2 = createPlayer('P2', 'O')



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
            }
         else if (currentPlayer == player2){
            currentPlayer = player1   
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
     alert(`${player1.name} wins!`)
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
     alert(`${player2.name} wins!`)
     clear()
     }
    else if (squares[0].innerHTML !='' && squares[1].innerHTML!='' && squares[2].innerHTML!='' && squares[3].innerHTML!=''
     && squares[4].innerHTML!='' && squares[5].innerHTML!='' &&squares[6].innerHTML!='' && squares[7].innerHTML!='' && squares[8].innerHTML!=''){
            alert('tie')
            clear()   
             }
    }


//submit button gets players names
const button = document.getElementById('submit')
button.addEventListener('click',()=>{
    form.style.display = 'none'
submit.style.display = 'none'
    gameboard()
    getPlayer1()
    getPlayer2()
})

