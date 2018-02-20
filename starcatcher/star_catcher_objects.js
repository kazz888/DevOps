
function Witch (x, y, ctx, img){
    this.r = 50;
    this.x = x;
    this.y = y;
    
    this.draw = function () {
//        ctx.beginPath();
//        ctx.arc(this.x + (this.r), this.y + (this.r), this.r, 0, 2 * Math.PI);
//        ctx.stroke();
        
        ctx.drawImage(img, this.x, this.y, this.r*2, this.r*3);
    }
}

function Star(x, y, ctx, img){
    this.x = x;
    this.y = y;
    this.r = 25;
    this.vy = getRandomInt(2, 5);
    this.rs = 2;
    this.rsi = getRandomInt(1, 5);
    this.draw = function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rs * Math.PI / 180);
        
//        ctx.beginPath();
//        ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
//        ctx.stroke();
        
        ctx.drawImage(img, 0 - this.r, 0 - this.r, 50, 50);
        ctx.restore();
    }
    this.update = function () {
        this.y += this.vy;
        this.rs += this.rsi;
        
        if(this.y > cheight){
            this.resetPos();
            score.miss();
        }
    }
    this.checkCollision = function(witch){
        var dx = witch.x - this.x;
        var dy = witch.y - this.y + witch.r;
        var d = Math.sqrt((dx * dx) + (dy * dy));
        
        if(d < this.r + witch.r){
            score.catch();
            this.resetPos();
        }       
    }
    this.resetPos = function(){
        this.x = getRandomInt(50, cwidth-50);
        this.y = getRandomInt(-500, -50);
    }
}

function Score(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.caught = 0;
    this.missed = 0;
    this.draw = function() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
        
        ctx.fillStyle = "black";
        ctx.font = "24px arial";
        ctx.fillText("Caught: " + this.caught, this.x + 10, this.y + 30, this.width - 20);
        ctx.fillText("Missed: " + this.missed, this.x + 10, this.y + 60, this.width - 20);
    }
    this.catch = function(){
        this.caught++;
    }
    this.miss = function(){
        this.missed++;
    }
}

