baby = [];
model_status = "";
function setup(){
canvas = createCanvas(750,400);
video = createCapture(VIDEO);
video.size(750,400);
video.hide();
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML = "Status  : Baby Detected";
}
function modelloaded(){
    console.log("model is loaded");
    model_status = true;
}
function gotResults(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
baby = results
}
function draw(){
image(video, 0, 0, 700, 450);
if(model_status != ""){


objectDetector.detect(video, gotResults);
for(i = 0; i < baby.length; i++){
    document.getElementById("status").innerHTML = "Status : Object Detected";
    noFill();
    stroke("blue");
    strokeWeight(3);
  rect(baby[i].x,baby[i].y,baby[i].width,baby[i].height);
  fill("white");
  textSize(20);
  percent = floor(baby[i].confidence * 100);
  text(baby[i].label + "   " + percent + "%", baby[i].x,baby[i].y);
  
}
}

}
