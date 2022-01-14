var countDownDate = new Date("Mar 14, 2022 15:37:25").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
  document.getElementById("demo").innerHTML = days + " days, " + hours + " hours, "
  + minutes + " minutes";
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);