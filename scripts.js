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
            square.innerHTML = currentPlayer.marker
            if(currentPlayer == player1){
                currentPlayer = player2
            }
         else if (currentPlayer == player2){
            currentPlayer = player1
            
        }    check() }
        
        )
    }
        }
)

();

function check(){
    if(squares[0].innerHTML == 'X' && squares[1].innerHTML == 'X' && squares[2].innerHTML == 'X'){
        console.log("Hello")
    }
}



//function to switch currentPlayer



