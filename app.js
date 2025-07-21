var characterImage = document.getElementById("character-image");
var speed = 5;
var flag = false;

function characterMovement(takeOrder) {
    if (takeOrder === 'forward') {
        speed += 5;
        characterImage.style.left = speed + 'px';
        if (!flag) {
            characterImage.src = 'backGround/characters/character1.gif';
        } flag = true;
    } else if (takeOrder === 'left') {
        speed -= 5;
        characterImage.style.left = speed + 'px';
        if (flag) {
            characterImage.src = 'backGround/characters/character2.gif';
        } flag = false;
    }
}


function moveCharacter(event) {
    console.log(event.key);
    if (event.key === 'ArrowRight') {
        characterMovement("forward");
    }
    else if (event.key === 'ArrowLeft') {
        characterMovement('left');
    }
}


window.addEventListener('keydown', moveCharacter);