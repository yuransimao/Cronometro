const start = document.getElementById('start')
const pause = document.getElementById('pause')
const Stop = document.getElementById('stop')
const contador= document.getElementById('contador')
var sec=00;
var min=00;
var hour=00
let interval;

start.addEventListener('click',(e)=>{
    e.preventDefault()
    interval = setInterval(watch, 1000)
    contador.className='contador'
})

pause.addEventListener('click',(e)=>{
    e.preventDefault()
     clearInterval(interval)
     contador.className='contador pause-red'
})

Stop.addEventListener('click',(e)=>{
    e.preventDefault()
     clearInterval(interval)
     contador.className='contador'
     contador.innerHTML='00:00:00'
    
     
})

function twod(digit){
    if(digit < 10){
        return ('0' +digit)
    }
    else{
        return digit
    }
}
function watch() {
    sec++
    if(sec==60){
        min++
        sec=00;
        
    }
    if (min==60) {
        min=00
        hour++
        
    }
   contador.innerHTML=twod(hour)+':'+twod(min)+':'+twod(sec)

}


