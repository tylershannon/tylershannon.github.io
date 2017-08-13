void setup() {
  size(900, 600);
  translate(-(width/2), -(height/2));

}

void draw() {
  noFill();
  stroke(255);
  background(#ffffff);

// -------- create startup square blue --------
  fill(#00c3ff);

  pushMatrix();
  translate(width/5, height/2);
  for ( int r=60; r>(10); r-=(10)) {
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();
// -------- create startup square magenta --------
  fill(#f70077);

  pushMatrix();
  translate((width/5)*2, height/2);
  for ( int r=60; r>(10); r-=(10)) {
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();
// -------- create startup square yellow --------
  fill(#f7f200);

  pushMatrix();
  translate((width/5)*3, height/2);
  for ( int r=60; r>(10); r-=(10)) {
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();
// -------- create startup square black --------
  fill(0);

  pushMatrix();
  translate((width/5)*4, height/2);
  for ( int r=60; r>(10); r-=(10)) {
    rectMode(CENTER);
    rect(0, 0, r, r);
  }
  popMatrix();
// -------- create rotating square blue --------
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
// -------- create rotating square magenta--------
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
// -------- create rotating square yellow--------
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
// -------- create rotating square black--------
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
