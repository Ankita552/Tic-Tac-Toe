let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#ngame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnX = true;//player1,payer2

let winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame = () =>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        if(turnX==true){
        box.innerText ="X";
        turnX= false;
        }
        else
        {
            box.innerText ="O";
            turnX= true;
        }
        box.disabled= true;

        cheakWinner();
    })
})


const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}



const showWinner = (winner) => {
    msg.innerHTML = `!!WINNER IS ${winner}!!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const cheakWinner=()=>
{
    for(let pattern of winPatterns){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
        showWinner(pos1Val);
        }
    }
    }
}


newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);