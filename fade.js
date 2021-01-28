

function chngImg() {
    var img = document.getElementById('toggle_mute').src;
    if (img.indexOf('Mute_ON') != -1) {
        document.getElementById('toggle_mute').src = 'Images/Mute_OFF.png';
    }
    else {
        document.getElementById('toggle_mute').src = 'Images/Mute_ON.png';
    }

}

function muteUnmute(muteObj) {
    let mutant = document.getElementById(muteObj);
    mutant.muted = !mutant.muted;
}


function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.currentTime = 0;
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


function toggleControls(videoobj) {
    var my_video = document.getElementById(videoobj);
    if (my_video.hasAttribute("controls")) {
     my_video.removeAttribute("controls")   
  } else {
     my_video.setAttribute("controls","controls");  
  }
    
}

function togglePoster(posterObject){
  var video_paused = document.getElementById(posterObject);
  if (video_paused.paused){
      video_paused.load();
  }


}