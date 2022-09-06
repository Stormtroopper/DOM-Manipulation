const startbutton=document.querySelector('#startstoBtn');
const resetBtn=document.querySelector('#resetBtn');
// variable for time values
let seconds=0;
let minutes=0;
let hours=0;
// Variables for leading zeroes
let leadingSec=0;
let leadingMin=0;
let leadingHour=0;
// Variable for set interval and timerstatus
let timerInterval=null;
let timerstatus="stopped";
// StopWatch function 
function stop(){
    seconds++;
    if(seconds/60 === 1){
        seconds=0;
        minutes++;
        if(minutes/60 === 1){
            minutes=0;
            hours++;
        }
    }
    if(seconds<10){
        leadingSec="0"+seconds.toString();
    }else{
        leadingSec=seconds;
    }
    if(minutes<10){
        leadingMin="0"+minutes.toString();
    }else{
        leadingMin=minutes;
    }
    if(hours<10){
        leadingHour="0"+hours.toString();
    }else{
        leadingHour=hours;
    }
    let displayTimer=document.getElementById('timer').innerText=leadingHour+":"+leadingMin+":"+leadingSec;
}
// window.setInterval(stop,1000)
startbutton.addEventListener('click',function(){
    if(timerstatus==="stopped"){
        timerInterval=window.setInterval(stop,1000)
        document.getElementById('startstopBtn').innerHTML=`<i class="fa-solid fa-pause"id="pause"</i>`;
        timerstatus="stopped";
    }
})