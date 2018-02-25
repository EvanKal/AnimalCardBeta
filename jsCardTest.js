const image = $(".image");
const audio = document.getElementById("audio");
//
//
image.click(function() {
  play(audio);
});

function play(audio){
     audio.play();
   };
