const game = document.getElementById("game");
const hero = document.getElementById("main-hero");
const blocks = document.querySelectorAll(".wall");
const xgame = document.getElementById("xgame");
function check_collision() {
    let canMove = true;
    blocks.forEach(block => {
        let right = parseInt(block.style.left) + parseInt(block.style.width);
        let left = parseInt(block.style.left);
        let top = parseInt(block.style.top);
        let bottom = parseInt(block.style.top) + parseInt(block.style.height);
        let heroLeft = x;  // Using the global x position
        let heroRight = x + 100;  // Using hero width
        let heroTop = y;  // Using the global y position
        let heroBottom = y + 100;  // Using hero height
        
        if (heroRight > left && 
            heroLeft < right && 
            heroBottom > top && 
            heroTop < bottom) {
            canMove = false;
        }
    });
    return canMove;
}
const speed = 5;
let x = 0;
let y = 0;
document.addEventListener("keydown", (event) => {
    console.log(event.key);
    let key = event.key;
    let oldX = x;
    let oldY = y;
    if (key === "w") {
        y -= speed;
    } else if (key === 'a') {
        x -= speed;
    } else if (key === 's') {
        y += speed;
    } else if (key === 'd') {
        x += speed;
    }
    if (check_collision()) {
        hero.style.left = x + "px";
        hero.style.top = y + "px";
    } else {
        x = oldX;
        y = oldY;
    }
});

function getPoint(){
    xgame.innerHTML = parseInt(xgame.innerHTML)+1; 
}
getPoint();
getPoint();
getPoint();