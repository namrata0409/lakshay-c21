var canvas;
var music;
var block1,block2,block3,block4;
var cube;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(255,5,5);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(0,255,246);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(0,255,127);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(61,140,255);

    
    //create box sprite and give velocity
    cube = createSprite(random(20,750),100, 40,40);
    cube.shapeColor= rgb(255,255,255);
    cube.velocityX = 4;
    cube.velocityY = 9;

    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    cube.bounceOff(edges);

    if(block1.isTouching(cube) && cube.bounceOff(block1)){
        cube.shapeColor = rgb(255,5,5);
        
    }
    //if(detectcollision(cube,block1)) {
      //  cube1.shapeColor = rgb(255,5,5);
      // }else{
     
     // }

      drawSprites(); 
    //add condition to check if box touching surface and make it box
}
