// make a function for a start button that gets the players first, then when you submit the players, call the gabemboard object!
let start = (function(){
   let start = document.createElement('button')
   start.innerHTML = 'Start Game'
   document.body.append(start)
   start.addEventListener('click',()=>{
    document.getElementById('form')
    form.style.display = "flex"    
    })

})();






function createPlayer(playername, mark){
    const marker = mark
    const name = playername
    return{name, marker}
}

function getPlayer1(){
    let playernamespace = document.getElementById('playername1')
     player1.name = playernamespace.value
    playernamespace.value = ''
}



function getPlayer2(){
    let playernamespace2 = document.getElementById('playername2')
     player2.name = playernamespace2.value 
    playernamespace2.value =''

}


function clear(){
    for(let i = 0; i<9; i++){
        square[i].innerHTML = ''
    }
}

const gameboard = (function(){
    
    let gamearea = document.getElementById('gamearea')
    let player1=createPlayer('p1','X')
    let player2=createPlayer('p1','O')

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




const button = document.getElementById('submit')
button.addEventListener('click',()=>{
    gameboard()
    getPlayer2()

})

//currently making a div for players to enter their name