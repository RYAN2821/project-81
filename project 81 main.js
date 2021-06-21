canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle ="blue" ;
ctx.lineWidth = 2;
ctx.arc(200,290,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black" ;
ctx.lineWidth = 2;
ctx.arc(290,290,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red" ;
ctx.lineWidth = 2;
ctx.arc(380,290,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow" ;
ctx.lineWidth = 2;
ctx.arc(245,330,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green" ;
ctx.lineWidth = 2;
ctx.arc(345,330,40,0,2 * Math.PI);
ctx.stroke();


