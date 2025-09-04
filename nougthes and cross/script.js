
// my first repository 

let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let winn=document.querySelector(".hide");
let msg=document.querySelector(".msg");


let turn0=true;
let winningpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        // console.log("hello");
        if (turn0==true){
            box.innerText="X"
            turn0=false
        }else{
            box.innerText="O"
            turn0=true
        }
        box.disabled=true;
        countwin();
    })
});

const disabled1=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const countwin =() =>{
    for(win of winningpattern){
        console.log(win[0],win[1],win[2])
        //console.log(boxes[win[0]],boxes[win[1]],boxes[win[2]])
        let count1=boxes[win[0]].innerText;
        let count2=boxes[win[1]].innerText;
        let count3=boxes[win[2]].innerText;
        //console.log(count1,count2,count3)
        if(count1!=""&&count2!=""&&count3!=""){
            if(count1==count2&&count2==count3){
                console.log("winner")
                disabled1();
                msg.classList.remove("hide")
            }
        }
    }
}
