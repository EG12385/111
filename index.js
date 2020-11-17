function playSound () {
  document.getElementById('play').play();
}

var anchors = document.getElementsByTagName('p');

for(var i = 0, len = anchors.length; i < len; i++) {
  var thisAnchor = anchors[i];
    thisAnchor.onclick = function () {
        var btn = this.parentNode.parentNode.getElementsByTagName('button')[0];
        btn.innerHTML = this.innerHTML;
    }

}


document.getElementById("startOrStopImg").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};


document.getElementById("go").onclickfunction = function testPlay(){

  var users = document.getElementById("users");
  var roll = document.getElementById("roll");
  var count = document.getElementById("count");

  if ((containerId.id == person && dropLoc == "one") ||
       (containerId.id == game && dropLoc == "1dice")||
       (containerId.id == total && dropLoc == "total"))

{
 href="game9.html";
}


}
