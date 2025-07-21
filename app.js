var modal1 = document.getElementById("modal1");
var speed = 5;
var flag = false;

function characterMovement(takeOrder) {
    if (takeOrder === 'forward') {
        speed += 5;
        modal1.style.left = speed + 'px';
        if (!flag) {
            modal1.src = 'backGround/characters/a.gif';
        } flag = true;
    } else if (takeOrder === 'left') {
        speed -= 5;
        modal1.style.left = speed + 'px';
        if (flag) {
            modal1.src = 'backGround/characters/aaa.gif';
        } flag = false;
    }
    else if (takeOrder === 'down') {
        console.log('Moving character down');
    } else if (takeOrder === 'left') {
        console.log('Moving character left');
    } else if (takeOrder === 'up') {
        console.log('Moving character right');
    } else {
    }
}


function moveCharacter(event) {
    console.log(event.key);

    if (event.key === 'ArrowRight') {
        characterMovement("forward");
    }
    // else if (event.key === 'ArrowDown') {
    //     characterMovement('down');
    // }
    else if (event.key === 'ArrowLeft') {
        characterMovement('left');
    }
    // else if (event.key === 'ArrowUp') {
    //     characterMovement('up');

    // }
    //  else {
    //     console.log('Invalid key pressed');
    // }
}


window.addEventListener('keydown', moveCharacter);