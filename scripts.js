var numberOfSounds = document.querySelectorAll(".sound").length;

for (var i = 0; i<numberOfSounds; i++) {
    document.querySelectorAll(".sound")[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        console.log(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});

function makeSound(key){
    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/a.wav");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/s.wav");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/d.wav");
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio("sounds/f.wav");
            tom4.play();
            break;

        case "h":
            var crash = new Audio("sounds/h.wav");
            crash.play();
            break;

        case "j":
            var kick = new Audio("sounds/j.wav");
            kick.play();
            break;

        case "k":
            var snare = new Audio("sounds/k.wav");
            snare.play();
            break;
        case "l":
            var snared = new Audio("sounds/l.wav");
            snared.play();
            break;
        default: console.log();
}}
