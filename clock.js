var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock(){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
}

function drawFace(ctx, radius){
    var grad;
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumbers(ctx, radius){
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseLine = "middle";
    ctx.textAlign = "center";
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMintutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.Pi/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
}