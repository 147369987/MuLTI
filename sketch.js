var ball;
var database;
var position;
var locoChild;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,30,30);
    ball.shapeColor = "Green";
    database = firebase.database();
    locoChild = database.ref('ball/position');
    locoChild.on("value",readPosition , showError);
}

function draw(){
    background(black");
    if(position!== undefined)
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x: position.x+x,

        y: position.y+y
    })


}

function readPosition(data){
    position= data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){
    console.log("error");
}
