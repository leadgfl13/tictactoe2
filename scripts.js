function createPlayer(playername, mark){
    const marker = mark
    const name = playername
    return{name, marker}
}

let player1 = createPlayer('Gary','X')
let player2 = createPlayer('Mo', 'O')

const gameboard = (function(){
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
    )
     console.log('player 1 wins!')

    if (squares[0].innerHTML == 'O' && squares[1].innerHTML == 'O' && squares[2].innerHTML == 'O' ||
     squares[3].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[5].innerHTML == 'O' ||
     squares[6].innerHTML == 'O' && squares[7].innerHTML == 'O' && squares[8].innerHTML == 'O'||
     squares[0].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[8].innerHTML == 'O' ||
     squares[2].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[6].innerHTML == 'O' ||
     squares[0].innerHTML == 'O' && squares[3].innerHTML == 'O' && squares[6].innerHTML == 'O'||
     squares[1].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[7].innerHTML == 'O' ||
     squares[2].innerHTML == 'O' && squares[5].innerHTML == 'O' && squares[8].innerHTML == 'O')
     console.log('player2 wins')

    
    else if (squares[0].innerHTML !='' && squares[1].innerHTML!='' && squares[2].innerHTML!='' && squares[3].innerHTML!=''
     && squares[4].innerHTML!='' && squares[5].innerHTML!='' &&squares[6].innerHTML!='' && squares[7].innerHTML!='' && squares[8].innerHTML!=''){
            console.log('tie')
        }
    }



//function to switch currentPlayer



