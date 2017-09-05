document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("mycanvas");
  canvas.width = 500;
  canvas.height = 500;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle= "rgb(200,120,170)";
  ctx.fillRect(50,50,150,150);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = "rgb(29,109,48)";
  ctx.fill();
});
