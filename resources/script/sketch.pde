void setup() {
  size(900, 600);
  translate(-(width/2), -(height/2));


}

void draw() {
  noFill();
  stroke(#ffffff);
  background(0);
  textSize(15);
  fill(255);
  text("> move mouse left and right to control rotation", 20, 30);
  text("> move mouse up and down to control radius", 20, 50);
  fill(0);

  pushMatrix();
  translate(width/2, height/2);
  float rotation=(mouseX/50);
  for ( int r=mouseY; r>(0); r-=(4)) {
    rotate(radians(rotation));
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();
}
