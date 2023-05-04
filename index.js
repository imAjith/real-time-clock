const secHandDegree = document.querySelector('.sec-hand');
const minHandDegree = document.querySelector('.min-hand');
const hourHandDegree = document.querySelector('.hour-hand');

function setDate(){
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = Math.floor((date.getHours()/2)-1);
 const secDegree = ((sec/60) * 360) + 90;
    const minDegree = ((min/60) * 360) + 90;
    const hourDegree = ((hour/12) * 360) +90;
    secHandDegree.style.transform = `rotate(${secDegree}deg)`;
    minHandDegree.style.transform = `rotate(${minDegree}deg)`;
    hourHandDegree.style.transform = `rotate(${hourDegree}deg)`;
   
}
setInterval(setDate,1000);