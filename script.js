console.log("is working");

function diceRoll() {
  let num = Math.random();
  num = Math.floor(num * 6 + 1);
  return num;
}
var roll1 = diceRoll();
var roll2 = diceRoll();

function change() {
  
  let image1 = document.querySelector(".imgDie1");
  image1.setAttribute("src", `./images/dice${roll1}.png`);


  let image2 = document.getElementsByClassName("imgDie2")[0];
  image2.setAttribute("src", `./images/dice${roll2}.png`);
}
change();

if(roll1>roll2){
    document.querySelector(".winner").innerHTML=" player 1 is the winner"

}
else if(roll2>roll1){
    document.querySelector(".winner").innerHTML=" player 2 is the winner"

}
else{
    document.querySelector(".winner").innerHTML=" draw"

}
let button=document.querySelector(".btn")
button.addEventListener("click",()=>{
    location.reload()
})
document.addEventListener("keydown",()=>{
    location.reload()
})
