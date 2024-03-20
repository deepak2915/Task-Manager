function AddTask(){
    console.log('AddTask')
    if(seconds==0){
        alert('HEYY BUDDYY PLEASE START TIMER FIRST...')
    }
    else{
    const task=document.getElementById("input-task").value 
    const desc=document.getElementById("input-desc").value 
    const sec=document.getElementById("seconds").innerText 
    console.log(task,desc)

document.getElementById("show-table").innerHTML += `
<tr>
<td>${task}</td>
<td>${desc}</td>
<td>${sec}</td>
</tr>
`
ResetTimer();
}
}
let  seconds=0
let interval =null
let minutes=0


function StartTimer(){

interval=setInterval(() =>{
    seconds++
    if(seconds >59){
        seconds = 0
        minutes ++
    }
    document.getElementById('seconds').innerText=
   `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}, 10)
}
function StopTimer() {
    clearInterval(interval)
    vbs=null
}
var ResetTimer=()=>{
    clearInterval(interval)
    interval =null
   
    document.getElementById('seconds').innerText='00:00';
}
