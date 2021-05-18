leftShoulderY = 0;
leftShoulderX = 0;
function preload(){}
function setup(){
    canvas = createCanvas(300,300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    canvas.position(550,200)
}
function modelLoaded(){
    console.log("PoseNet is Initialized")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftShoulderY = results[0].pose.leftShoulder.y;  
        leftShoulderX = results[0].pose.leftShoulder.x;
        console.log("ls x = "+ leftShoulderX);
        console.log("ls y = "+ leftShoulderY);
    }
}
function draw(){
 image(video, 0, 0, 300, 300)
}