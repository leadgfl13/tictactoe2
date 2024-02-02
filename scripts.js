function createPlayer(playername, mark){
    const marker = mark
    const name = playername
    return{name, marker}
}

let player1 = createPlayer('Gary','X')
let player2 = createPlayer('Mo', 'O')

function getPlayer1(){
    player1.name = prompt('Name of player 1')
    return player1.name
}

function getPlayer2(){
    player2.name = prompt("Name of player 2")
}

function clear(){
    for(let i = 0; i<9; i++){
        square[i].innerHTML = ''
    }
}

const gameboard = (function(){

    getPlayer1()
    getPlayer2()
    
    let currentPlayer = player1
    let board = document.createElement('div')
    board.setAttribute('id','board')
     squares = []
    document.body.append(board)
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
        }
)
();

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






