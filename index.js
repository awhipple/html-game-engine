window.onload = function() {
  var c = document.getElementById("gameCanvas");
  var ctx =  c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 100);
  ctx.stroke();
}