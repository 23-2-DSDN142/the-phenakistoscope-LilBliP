const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_FRAME);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("heart_circle","png")
  pScope.load_image_sequence("hoplite","png",12)

}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( RING );
  layer1.set_boundary( 200, 800 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(pattern);
  layer3.mode( RING );
  layer3.set_boundary( 800, 1000 );
}

function faces(x, y, animation, pScope){
  
  scale(.25);

pScope.draw_image_from_sequence("hoplite",0,-2000,animation.frame)
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  strokeWeight(0)
rect(-5,-100-animation.wave()*300,10,200) // .wave is a cosine wave btw
triangle(0,-130-animation.wave()*300,-8,-100-animation.wave()*300,8,-100-animation.wave()*300)

}
function pattern(x, y, animation, pScope){

  strokeWeight(30)
noFill()
  arc(0,0,1900,1900,0,36);
  arc(0,0,1700,1700,0,36);
 

}