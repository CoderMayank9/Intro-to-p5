function setup()
{
canvas=createCanvas(600,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();
tintcolor="";
}
function filtercolour()
{
tintcolor=document.getElementById("colourname").value;
}
function draw()
{
image(video,0,0,600,600);
tint(tintcolor);
}
function take_snapshot()
{
save("MyImage.png");
}