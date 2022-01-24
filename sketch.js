var godzilla, god, rodan, city, lazer, mothra, leo;
var godzillaImg, rodanImg, cityImg, godImg, lazerImg, mothraImg, leoImg;
var box;
var boxImg;
var mecha;
var mechaImg;

function preload() {
cityImg = loadImage("City.jpg");
godzillaImg = loadImage("Godzilla (mouth closed).png");
godImg = loadImage("Godzilla (mouth opened).png");

rodanImg = loadImage("Rodan.png");
mothraImg = loadImage("Mothra brown.png");
leoImg = loadImage("Mothra Blue.png");

lazerImg = loadImage("Lazer.png");

mechaImg = loadImage("gho.png");
}



function setup() {
createCanvas(1010,600);



//City
city = createSprite(230,240,100,600);
city.addImage(cityImg);
city.scale=0.950;

//Godzilla
godzilla = createSprite(1000,530,10,10);
godzilla.addImage(godzillaImg);
godzilla.scale = 0.500;
godzilla.mirrorX(-1);




box = createSprite(870,385,30,30);
box.visible=false;
}



function draw() {
background(0);



if(godzilla.y<20) {
godzilla.remove();
box.remove();
}

if(godzilla.y<6) {
  godzilla.remove();
  box.remove();
}


if (keyDown("space")) {
createLazer();
}

if(keyDown("up")) {
godzilla.y = godzilla.y-3;
box.y=box.y-3;
}

if(keyDown("down")) {
godzilla.y = godzilla.y+3;
box.y = box.y+3;
}



var select_sprite = Math.round(random(1,4));
var select_sprite = Math.round(random(1,4));
var select_sprite = Math.round(random(1,4));
var select_sprite = Math.round(random(1,4));

if(World.frameCount % 95 === 0) {
  if(select_sprite == 1) {
    createMothraB();
  } else if(select_sprite == 2) {
    createRodan();
  } else if(select_sprite == 3) {
    createMeca();
  } else (select_sprite == 4) 
    createLeo();
  }

  if(World.frameCount % 550 === 0) {
    if(select_sprite == 1) {
      createMothraB();
    } else if(select_sprite == 2) {
      createRodan();
    } else if(select_sprite == 3) {
      createLeo();
    } else (select_sprite == 4) 
    createMeca();
    }




drawSprites();
}



function createLazer() {
  var lazer = createSprite(0,0,10,10);
  lazer.addImage(lazerImg);
  lazer.x = 740;
  lazer.y = box.y;
  lazer.scale= 0.050;
  lazer.velocityX = -4;
  lazer.lifetime = 150;
}


//Monsters


function createRodan() 
{
var rodan = createSprite(0,Math.round(random(20, 370)), 10, 10);
rodan.addImage(rodanImg);
rodan.scale= 0.435;
rodan.velocityX = 4;
rodan.lifetime = 200;
}


function createMeca()  {
    mecha = createSprite(0,Math.round(random(20, 370)), 100, 100);
    mecha.addImage(mechaImg);
    mecha.scale=0.6;
    mecha.velocityX = 4;
     mecha.lifetime = 200;
}



function createMothraB() {
  var mothra = createSprite(0,Math.round(random(20, 370)), 10, 10);
  mothra.addImage(mothraImg);
  mothra.scale = 0.2;
  mothra.mirrorX(-1);
  mothra.velocityX = 4;
  mothra.lifetime = 200;
}


function createLeo() {
  var leo = createSprite(0,Math.round(random(20, 370)), 10, 10);
  leo.addImage(leoImg);
  leo.scale = 0.400;
  leo.mirrorX(-1);
  leo.velocityX = 4;
  leo.lifetime = 190;
}


lazer = createEdgeSprites()

if(lazer.isTouching(leo)) {
  leo.collide(lazer);
}





