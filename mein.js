console.log(1);

const game = document.getElementById("game");
const hero = document.getElementById("main-hero")
function check_collision(){
blocks.forEach(block =>{
    console.log(parseInt(block.style.left));
    let right = parseInt(block.style.left) + parseInt(block.style.width);
    let left = parseInt(block.style.left);
    let top = parseInt(block.style.top);
    let bottom = parseInt(block.style.top) + parseInt(block.style.height);

    let heroLeft = parseInt(hero.style.left);
    let heroRight = parseInt(hero.style.left) + parseInt(hero.style.width);
    let heroTop = parseInt(hero.style.top);
    let heroBottom = parseInt(hero.style.top) + parseInt(hero.style.height);
    
    



    if( ((left < heroRight && right > heroLeft) ||
        (right>heroLeft && left <heroRight)) &&
        ((top<heroBottom && bottom>heroTop) ||
        (bottom>heroTop && top<heroBottom))

    ){
        console.log(false);
    }else{console.log(true)};
})
}
const speed = 5;

let x = 0
let y = 0
document.addEventListener("keydown", (event)=>{
    console.log(event.key);
    let key =event.key;
    if (key === "w"){
        check_collision();
        y-=speed
        hero.style.top = y + "px";
    }else if (key ==='a'){
        check_collision();
        x-=speed
        hero.style.left = x + "px"
    }else if (key === 's'){
        check_collision();
        y+=speed
        hero.style.top = y + "px"
    }else if (key === 'd'){
        check_collision();
        x+=speed
        hero.style.left = x + "px"
    }

})  


const blocks = document.querySelectorAll(".wall");
blocks.forEach(block =>{
    console.log(block);

})