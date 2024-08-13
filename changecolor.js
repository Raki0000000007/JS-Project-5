let randomColor = function(){
    const hex = '0123456789ABCDEF'
    let Color='#'
    for(let i = 0;i<6;i++){
        Color=Color+hex[Math.floor(Math.random()*16)]
    }
    return Color
}

let Start = document.getElementById('Start')
let Stop = document.getElementById('Stop')
let startcolor;

const Startfunction=function(){
    startcolor= setInterval(Backgroundcolor,1000)
   function Backgroundcolor(){
        document.body.style.backgroundColor=randomColor()
    }
}
const Stopfunction=function(){
    clearInterval(startcolor)
}

Start.addEventListener('click',Startfunction)
Stop.addEventListener('click',Stopfunction)