const SLICE_COUNT = 10;
let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000,1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("heart_circle","png")
  pScope.load_image_sequence("hoplite","png",24)
  pScope.load_image("Ring","png")

}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(hoplite);
  layer1.mode( RING );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(spears);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(stain);
  layer3.mode( RING );
  layer3.set_boundary( 0, 1000 );
}

function stain(x, y, animation, pScope){
  strokeWeight(0)
  fill(149, 105, 58)
  triangle(250,780,230,715,210,755)
  triangle(230,715,210,650,190,700)
  triangle(210,650,190,585,170,635)
  triangle(190,585,170,520,150,570)
  
 
150/3 
260 
}
function hoplite(x, y, animation, pScope){
  fill(179, 134, 75)
arc(x,y,2000,2000,backgroundArcStart,backgroundArcEnd);

  scale(.25,.3);
pScope.draw_image_from_sequence("hoplite",0,-2250,animation.frame)
}

function spears(x, y, animation, pScope){

  // this is how you set up a background for a specific layer

  fill(149, 105, 58)
  arc(x,y,900,900,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(50,20,0)
 strokeWeight(.25)
stroke(225)
//main spear
rect(-5,-200-animation.wave()*200,10,200) // .wave is a cosine wave btw
arc(0,-200-animation.wave()*200,15,30,0,180)
arc(0,-200-animation.wave()*200,15,100,180,360)
arc(0,-170-animation.wave()*200,10,100,180,0)
//secondary spears
scale(.75)
rect(-45,-300-animation.wave()*200,10,200)
arc(-40,-300-animation.wave()*200,15,30,0,180)
arc(-40,-300-animation.wave()*200,15,100,180,360)
arc(-40,-270-animation.wave()*200,10,100,180,0)

rect(35,-300-animation.wave()*200,10,200)
arc(40,-300-animation.wave()*200,15,30,0,180)
arc(40,-300-animation.wave()*200,15,100,180,360)
arc(40,-270-animation.wave()*200,10,100,180,0)
scale(1.38)
if (animation.frame < 1/SLICE_COUNT){
pScope.draw_image("Ring",0,0);}
scale(.56)
if (animation.frame < 1/SLICE_COUNT){
  pScope.draw_image("Ring",0,0);}
}
