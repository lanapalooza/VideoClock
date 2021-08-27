function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    // hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
currentTime();

function videoEnded(totalClips,fileExtension){
  $("#video1").fadeOut(2000); // shows the black screen for 2 seconds
  // the below function plays a random video after 3 seconds
  setTimeout(function(){
    var getRand = Math.floor(  Math.random() * totalClips +1  );
  $("#video1").attr("src","data/"+getRand+fileExtension).toggle("slide");
},3000)

}