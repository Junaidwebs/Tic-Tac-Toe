let boxes = document.querySelectorAll(".bx");
let reset = document.querySelector("#reset");

let turnO = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();

    })
   
})

const checkwinner = () =>{
    for( let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
       

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                alert(`Congratulations ${pos1val}  is a Winner`);
                for(b of boxes){
                  b.disabled = true;
                }
            }
        }
    }
}
reset.addEventListener("click" ,() => {
    for(b of boxes){
        b.innerHTML = "";
        b.disabled = false;
    }
    
})
let crs = document.querySelector(".crs");
document.addEventListener("mousemove" ,function(dets){
    crs.style.left = dets.x+"px";
    crs.style.top = dets.y+"px";

})