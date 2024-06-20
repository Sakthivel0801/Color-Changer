let outside = document.getElementById("outside");
let inside = document.getElementById("inside");
let btn  = document.getElementById("btn")
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',changeBg())
btn.addEventListener('click',changeBg1())
function changeBg(){
   let hexColor = "#"
   for(let i=1;i<=6;i++){
     hexColor = hexColor + randHexValue()
   }
   outside.style.backgroundColor = hexColor
}

function changeBg1(){
    let hexColor1 = "#"
    for(let j=1;j<=6;j++){
     hexColor1 = hexColor1 + randHexValue1()
   }
   inside.style.backgroundColor = hexColor1

}

function randHexValue(){
  let randomIndex = Math.floor(Math.random()*16)
  return hex[randomIndex]
}

function randHexValue1(){
    let randomIndex1 = Math.floor(Math.random()*16)
    return hex[randomIndex1]
  }