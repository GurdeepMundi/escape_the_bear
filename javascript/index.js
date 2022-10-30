const musicButton = document.querySelector("#musicButton");
const audio = document.querySelector("#player");
audio.loop=true;
musicButton.addEventListener("click", function(){
    if(audio.paused){
      audio.play();
    } else {
      audio.pause();
    }
  });