document.addEventListener('click',()=>{
    alert("Hello")
})

const gameboard = (function(){
    let board = document.createElement('div')
    board.setAttribute('id','board')
    document.body.append(board)
    for(let i=0; i<=9; i++){
        let square = document.createElement('div')
        square.setAttribute('id','square')
        board.append(square)
    }

})();