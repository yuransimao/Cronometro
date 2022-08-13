const start = document.getElementById('start')
const pause = document.getElementById('pause')
const Stop = document.getElementById('stop')
const contador= document.getElementById('contador')
let sec = 00;
let min = 00;
let hour = 00
let interval;


start.addEventListener('click',()=>{
    interval = setInterval(watch, 10)
    contador.className='contador'
})

pause.addEventListener('click',()=>{
     clearInterval(interval)
     contador.className='contador pause-red'
})

Stop.addEventListener('click',()=>{
   
     clearInterval(interval)
     sec=00
     min=00
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


