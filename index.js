
const myClock = () => {
    const curDate = new Date()
    let hour = curDate.getHours()
    let min = curDate.getMinutes()
    let sec = curDate.getSeconds()
 
    const clock = document.querySelector('.clock')
    
	html = (hour > 9? hour:"0" + hour);
    html += ":" + (min > 9? min:"0" + min);
    html += ":" + (sec > 9? sec:"0" + sec);
    clock.innerHTML = html
 
    for (let hour = 0; hour < 24 ; hour++) {
       if (min == 00 ) {
          clock.style.color='red'
          if (sec % 2 == 0){
             clock.style.color='red'
             clock.style.display='none'
         }else{
             clock.style.color='red'
             clock.style.display='block'
             clock.style.borderColor ="red"
         }
       } 
       else {
          clock.style.color ='rgb(11, 182, 235)'
          clock.style.display='block'
          clock.style.borderColor="rgb(28, 196, 196)"
      }      
 }
}
 setInterval(myClock, 1000)