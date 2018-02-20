var cwidth, cheight, canvas, ctx, witch, score;
var img_bg, img_witch, img_star;
var stars;

function init(){
    cwidth = window.screen.availWidth;
    cheight = window.screen.availHeight;
    canvas = document.getElementById("canvas");
    canvas.width = cwidth;
    canvas.height = cheight;
    ctx = canvas.getContext("2d");
    r = Math.random();
    score = new Score(10, 10, 200, 80);
    
    initImages();
    
    stars = [];
    
    for(var i = 0; i < 10; i++){
        stars.push(new Star(getRandomInt(50, cwidth-50), getRandomInt(-200, -50), ctx, img_star));
    }
    
    
    witch = new Witch(100, cheight - 250, ctx, img_witch);   
    
    update();
}

function initImages(){
    img_witch = new Image();
    img_witch.src = "witch.png";
    
    img_bg = new Image();
    img_bg.src = "spooky_house.jpg";
    
    img_star = new Image();
    img_star.src = "star.png";
}

function moveWitch(e){
    witch.x = e.clientX;
}

function update(){
    ctx.clearRect(0, 0, cwidth, cheight);
    ctx.drawImage(img_bg, 0, 0);
    
    witch.draw();
    score.draw();
    
    
    for(i = 0; i < stars.length; i++){
        stars[i].update();
        stars[i].checkCollision(witch);
        stars[i].draw();
    }
    
    
    setTimeout(update, 1000/60);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}















