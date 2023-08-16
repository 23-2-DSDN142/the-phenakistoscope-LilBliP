const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_FRAME);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 200, 1200 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function faces(x, y, animation, pScope){
  
  scale(animation.frame*3);

  
  strokeWeight(3)
fill(255,175,125)
  beginShape()
vertex(100,50)
vertex(-100,50)
vertex(0,0)
endShape(CLOSE)
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
rect(-10-animation.wave()*100,-100-animation.wave()*300,20,20) // .wave is a cosine wave btw

strokeWeight(3)
fill(255,175,125)
  beginShape()
  vertex(-50,-150)
  vertex(50,-150)
  vertex(0,0)
  endShape()
 
}
