void setup() {
  size(900, 600);
  translate(-(width/2), -(height/2));

}

void draw() {
  noFill();
  stroke(255);
  background(#ffffff);
  textSize(15);
  fill(0);
  text("> move mouse left and right to control rotation", 20, 30);
  text("> move mouse up and down to control radius", 20, 50);

// -------- create startup square --------
  fill(#00c3ff);

  pushMatrix();
  translate(width/5, height/2);
  for ( int r=40; r>(10); r-=(4)) {
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();

// -------- create rotating square --------

  fill(#00c3ff);

  pushMatrix();
  translate(width/5, height/2);
  float rotation=(mouseX/50);
  for ( int r=mouseY/3; r>(0); r-=(4)) {
    rotate(radians(rotation));
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();

  fill(#f70077);

  pushMatrix();
  translate((width/5)*2, height/2);
  float rotation=(mouseX/50);
  for ( int r=mouseY/3; r>(0); r-=(4)) {
    rotate(radians(rotation));
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();

  fill(#f7f200);

  pushMatrix();
  translate((width/5)*3, height/2);
  float rotation=(mouseX/50);
  for ( int r=mouseY/3; r>(0); r-=(4)) {
    rotate(radians(rotation));
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();

  fill(0);

  pushMatrix();
  translate((width/5)*4, height/2);
  float rotation=(mouseX/50);
  for ( int r=mouseY/3; r>(0); r-=(4)) {
    rotate(radians(rotation));
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();
}
