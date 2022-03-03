

let audio = document.getElementById("musicplayer")



function playAudio() {
    audio.play()
}


// for starting the confetti 

const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti 

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 6000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};
// after this here we are calling both the function so it works
condition = true
function popAndAudio() {
    
    while (condition == true) {
        playAudio();
        start();
        stop();
        document.getElementById("heading").style.display = "block"
        document.getElementById("loichuc").style.display = "grid"
        document.getElementById("scroll").style.display = "block"
        condition = false
    }
    
    
}