for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        if (i<4) {
            var audio = new Audio("./sounds/tom-" + (i+1) + ".mp3");
            audio.play();
        } else if (i==4) {
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        } else if (i==5) {
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        } else if (i==6) {
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        }
    });
}