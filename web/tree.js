var myCanvas = document.getElementById("my_canvas");
var ctx = myCanvas.getContext("2d");
var rnd_rot = 3 + Math.floor(Math.random() * 20);
var rnd_len = 80;
var rnd_width = 4 + Math.floor(Math.random() * 6);
function drawTree(startX, startY, len, angle, branchWidth) {
    ctx.lineWidth = branchWidth;

    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = `rgb(
        ${255-255*(len-6)/(rnd_len-6)}
        0
        0)`;
    ctx.flilStyle = "black";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "rgba(0,0,0,0.8)";

    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();


    if(len < 6) {
        ctx.restore();
        return;
    }
    
    drawTree(0, -len, len*0.8, angle-rnd_rot, branchWidth*0.8);
    drawTree(0, -len, len*0.8, angle+rnd_rot, branchWidth*0.8);
    ctx.restore();
}
drawTree(300, 400, rnd_len, 0, rnd_width)
