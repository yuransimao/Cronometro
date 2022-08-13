const start = document.getElementById('start')
const pause = document.getElementById('pause')
const stop = document.getElementById('stop')
const contador= document.getElementById('contador')
var sec=00;
var min=00;
var hour=00
let interval;

start.addEventListener('click',(e)=>{
    e.preventDefault()
    interval = setInterval(wath, 1000)
})

function wath() {
    sec++
    if(sec==60){
        min++
        sec=00;
        
    }
    if (min==60) {
        min=00
        hour++
        
    }
   contador.innerHTML=hour+':'+min+':'+sec

}


