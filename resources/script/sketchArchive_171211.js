var plan_level_1, plan_level_2;
var planRatio =11/16;
var transparency = 120;
var c_K, c_1, c_2, c_3, c_4, c_5, c_cafe, c_media, c_specials, c_admin, c_secEd, c_ui;
var L1_roomLocations_X = [10,200,300];
var planShift_X, planShift_Y;
var classroomEllipseSize = 40;



function preload() {
  plan_level_1 = loadImage("./resources/images/171206-BellScheduleAnalysis_FloorPlans-LEVEL1.svg");
  plan_level_2 = loadImage("./resources/images/171206-BellScheduleAnalysis_FloorPlans-LEVEL2.svg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  //define colors
  c_K = color(229, 115, 115, transparency);
  c_1 = color(186, 104, 200, transparency);
  c_2 = color(100, 181, 246, transparency);
  c_3 = color(77, 182, 172, transparency);
  c_4 = color(255, 241, 118, transparency);
  c_5 = color(255, 138, 101, transparency);
  c_cafe = color(106, 27, 154, transparency);
  c_media = color(251, 192, 45, transparency);
  c_specials = color(124, 179, 66, transparency);
  c_admin = color(171, 178, 185, transparency);
  c_specEd = color(191, 54, 12, transparency);
  c_ui = color(255, 206, 0);
  c_graph = color(191,173,74);

}

function draw() {

  //////////////////////////////redraw background and plans//////////////////////////////
  background(51);
  planWidth = windowWidth/2;
  planHeight = planWidth*planRatio;
  planShift_X = windowWidth - planWidth;
  planShift_Y = windowHeight/2;

  image(plan_level_1, windowWidth/4,windowHeight/4+50, planWidth,planHeight);
  image(plan_level_2, (windowWidth/4)*3,windowHeight/4+50, planWidth,planHeight);

  //////////////////////////////draw title text//////////////////////////////
  noStroke();
  fill(255);
  textSize(20);
  text("Hildreth Elementary School",10,32);
  textSize(12);
  text("Building Utilization Study",10,52);

  noStroke();

  var yFactor = ((windowHeight/4+50)-(planHeight/2))

  var timeBlocks = floor(map(mouseX,0,windowWidth,0,8));

  //////////////////////////////draw bell schedule scroll background//////////////////////////////
  timelineY = yFactor+planHeight
  var timelineDist;
  stroke(255);
  for (var i = 10; i < windowWidth-20; i+=10){
    strokeWeight(.5);
    line(i,timelineY,i,timelineY+50);
  }
  noStroke();
  strokeWeight(1);
  stroke(c_ui);
  fill(c_ui);
  rectMode(CORNER);
  rect(mouseX-3.5, timelineY-5, 7, 60);
  line(mouseX,timelineY+50,mouseX, windowHeight);

  //////////////////////////////draw time////////////////////////////////////////////////////
  textAlign(CENTER);

  var bellTime = ["8:50","8:55","9:00","9:05","9:10","9:15","9:20","9:25","9:30","9:35",
                  "9:40","9:45","9:50","9:55","10:00","10:05","10:10","10:15","10:20",
                "10:25","10:30","10:35","10:40","10:45","10:50","10:55","11:00","11:05","11:10",
              "11:15","11:20","11:25","11:30","11:35","11:40","11:45","11:50","11:55",
            "12:00","12:05","12:10","12:15","12:20","12:25","12:30","12:35","12:40","12:45","12:50",
          "12:55","1:00","1:05","1:10","1:15","1:20","1:25","1:30","1:35","1:40","1:45","1:50","1:55",
        "2:00","2:05","2:10","2:15"];

  var bellIndex = floor(map(mouseX, 0, windowWidth, 0, bellTime.length));
  textSize(32);
  text(bellTime[bellIndex],mouseX,timelineY-10);

  textAlign(LEFT);
  noStroke();

//////////////////////////////draw graph ui//////////////////////////////
  stroke(255);
  strokeWeight(.5);
  line(10,timelineY+50,10,windowHeight-20);
  line(windowWidth-20, timelineY+50, windowWidth-20,windowHeight-20);
  line(10,windowHeight-20, windowWidth-20, windowHeight-20);

  noStroke();
  var barHeight = windowHeight - (timelineY+70);
//////////////////////////////draw program//////////////////////////////
//block 1
  if(bellIndex>-1){

    //place admin
    fill(c_admin);
    ellipse(planWidth*.774,yFactor+planHeight*.72,classroomEllipseSize*1.5,classroomEllipseSize*1.5);
    ellipse(planWidth*.58,yFactor+planHeight*.23,classroomEllipseSize*.75,classroomEllipseSize*.75);
    rectMode(CORNERS);
    fill(c_graph);
    rect(10,windowHeight-20,mouseX,windowHeight-(barHeight*(2/48)+20));
    //48
  }
//block 2
  if(bellIndex>1 && bellIndex<14){
    rect(10,windowHeight-20,(windowWidth/65)*2,windowHeight-(barHeight*(2/48)+20));
    rect((windowWidth/65)*2,windowHeight-20,mouseX,windowHeight-(barHeight*(26/48)+20));
    //place special education level 1
    fill(c_specEd);
    ellipse(planWidth*.25,yFactor+planHeight*.35,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.338,yFactor+planHeight*.42,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.435,yFactor+planHeight*.38,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.284,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.437,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.66,yFactor+planHeight*.235,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.63,yFactor+planHeight*.37,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.73,yFactor+planHeight*.63,classroomEllipseSize*.5,classroomEllipseSize*.5);
    //place special education level 2
    ellipse(planWidth*.16+planShift_X,yFactor+planHeight*.34,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.338+planShift_X,yFactor+planHeight*.42,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.359+planShift_X,yFactor+planHeight*.37,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.21+planShift_X,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.365+planShift_X,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.7+planShift_X,yFactor+planHeight*.35,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.705+planShift_X,yFactor+planHeight*.65,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.65+planShift_X,yFactor+planHeight*.655,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.62+planShift_X,yFactor+planHeight*.61,classroomEllipseSize*.5,classroomEllipseSize*.5);
    //place 4th grade
    fill(c_4);
    ellipse(planWidth*.81+planShift_X,yFactor+planHeight*.59,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.82+planShift_X,yFactor+planHeight*.67,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.8+planShift_X,yFactor+planHeight*.76,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.73+planShift_X,yFactor+planHeight*.77,classroomEllipseSize,classroomEllipseSize);
    //place specials
    fill(c_specials);
          //gym
          ellipse(planWidth*.807,yFactor+planHeight*.429,classroomEllipseSize*2,classroomEllipseSize*2);
          //art
          ellipse(planWidth*.583+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
          //music
          ellipse(planWidth*.68+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
  }
//block 3
  if(bellIndex>13 && bellIndex<25){
    rect(10,windowHeight-20,(windowWidth/65)*2,windowHeight-(barHeight*(2/48)+20));
    rect((windowWidth/65)*2,windowHeight-20,(windowWidth/65)*14,windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*14,windowHeight-20,mouseX, windowHeight-(barHeight*(26/48)+20));
    //place special education level 1
    fill(c_specEd);
    ellipse(planWidth*.25,yFactor+planHeight*.35,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.338,yFactor+planHeight*.42,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.435,yFactor+planHeight*.38,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.284,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.437,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.66,yFactor+planHeight*.235,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.63,yFactor+planHeight*.37,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.73,yFactor+planHeight*.63,classroomEllipseSize*.5,classroomEllipseSize*.5);
    //place special education level 2
    ellipse(planWidth*.16+planShift_X,yFactor+planHeight*.34,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.338+planShift_X,yFactor+planHeight*.42,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.359+planShift_X,yFactor+planHeight*.37,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.21+planShift_X,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.365+planShift_X,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.7+planShift_X,yFactor+planHeight*.35,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.705+planShift_X,yFactor+planHeight*.65,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.65+planShift_X,yFactor+planHeight*.655,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.62+planShift_X,yFactor+planHeight*.61,classroomEllipseSize*.5,classroomEllipseSize*.5);
    //place specials
    fill(c_specials);
          //gym
          ellipse(planWidth*.807,yFactor+planHeight*.429,classroomEllipseSize*2,classroomEllipseSize*2);
          //art
          ellipse(planWidth*.583+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
          //music
          ellipse(planWidth*.68+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    //place 5th grade
    fill(c_5);
    ellipse(planWidth*.51+planShift_X,yFactor+planHeight*.7,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.55+planShift_X,yFactor+planHeight*.79,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.61+planShift_X,yFactor+planHeight*.78,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.67+planShift_X,yFactor+planHeight*.77,classroomEllipseSize,classroomEllipseSize);
  }
//block 4
  if(bellIndex>24 && bellIndex<35){
    rect(10,windowHeight-20,(windowWidth/65)*2,windowHeight-(barHeight*(2/48)+20));
    rect((windowWidth/65)*2,windowHeight-20,(windowWidth/65)*14,windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*14,windowHeight-20,(windowWidth/65)*25, windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*25,windowHeight-20,mouseX, windowHeight-(barHeight*(19/48)+20));
    //place kindergarten
    fill(c_K);
    ellipse(planWidth*.167,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.242,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.325,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.201,yFactor+planHeight*.389,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.288,yFactor+planHeight*.408,classroomEllipseSize,classroomEllipseSize);
    //place cafeteria
    fill(c_cafe);
    ellipse(planWidth*.548,yFactor+planHeight*.751,classroomEllipseSize*2,classroomEllipseSize*2);
    //place 2nd grade
    fill(c_2);
    ellipse(planWidth*.242+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.325+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.201+planShift_X,yFactor+planHeight*.389,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.288+planShift_X,yFactor+planHeight*.408,classroomEllipseSize,classroomEllipseSize);
    //place specials
    fill(c_specials);
          //gym
          ellipse(planWidth*.807,yFactor+planHeight*.429,classroomEllipseSize*2,classroomEllipseSize*2);
          //art
          ellipse(planWidth*.583+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
          //music
          ellipse(planWidth*.68+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    //place 5th grade
    fill(c_5);
    ellipse(planWidth*.51+planShift_X,yFactor+planHeight*.7,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.55+planShift_X,yFactor+planHeight*.79,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.61+planShift_X,yFactor+planHeight*.78,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.67+planShift_X,yFactor+planHeight*.77,classroomEllipseSize,classroomEllipseSize);
  }
//block 5
  if(bellIndex>34 && bellIndex<46){
    rect(10,windowHeight-20,(windowWidth/65)*2,windowHeight-(barHeight*(2/48)+20));
    rect((windowWidth/65)*2,windowHeight-20,(windowWidth/65)*14,windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*14,windowHeight-20,(windowWidth/65)*25, windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*25,windowHeight-20,(windowWidth/65)*35, windowHeight-(barHeight*(19/48)+20));
    rect((windowWidth/65)*35,windowHeight-20,mouseX,windowHeight-(barHeight*(20/48)+20))
    //place cafeteria
    fill(c_cafe);
    ellipse(planWidth*.548,yFactor+planHeight*.751,classroomEllipseSize*2,classroomEllipseSize*2);
    //place 1st grade
    fill(c_1);
    ellipse(planWidth*.394,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.478,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.386,yFactor+planHeight*.423,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.473,yFactor+planHeight*.440,classroomEllipseSize,classroomEllipseSize);
    //place special education level 2
    fill(c_specEd);
    ellipse(planWidth*.16+planShift_X,yFactor+planHeight*.34,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.338+planShift_X,yFactor+planHeight*.42,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.359+planShift_X,yFactor+planHeight*.37,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.21+planShift_X,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.365+planShift_X,yFactor+planHeight*.284,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.7+planShift_X,yFactor+planHeight*.35,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.705+planShift_X,yFactor+planHeight*.65,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.65+planShift_X,yFactor+planHeight*.655,classroomEllipseSize*.5,classroomEllipseSize*.5);
    ellipse(planWidth*.62+planShift_X,yFactor+planHeight*.61,classroomEllipseSize*.5,classroomEllipseSize*.5);
    //place 3rd grade
    fill(c_3);
    ellipse(planWidth*.394+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.478+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.386+planShift_X,yFactor+planHeight*.423,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.473+planShift_X,yFactor+planHeight*.440,classroomEllipseSize,classroomEllipseSize);
  }
//block 6
  if(bellIndex>45 && bellIndex<55){
    rect(10,windowHeight-20,(windowWidth/65)*2,windowHeight-(barHeight*(2/48)+20));
    rect((windowWidth/65)*2,windowHeight-20,(windowWidth/65)*14,windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*14,windowHeight-20,(windowWidth/65)*25, windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*25,windowHeight-20,(windowWidth/65)*35, windowHeight-(barHeight*(19/48)+20));
    rect((windowWidth/65)*35,windowHeight-20,(windowWidth/65)*45,windowHeight-(barHeight*(20/48)+20));
    rect((windowWidth/65)*45,windowHeight-20,mouseX,windowHeight-(barHeight*(19/48)+20));
    //place kindergarten
    fill(c_K);
    ellipse(planWidth*.167,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.242,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.325,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.201,yFactor+planHeight*.389,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.288,yFactor+planHeight*.408,classroomEllipseSize,classroomEllipseSize);
    //place 1st grade
    fill(c_1);
    ellipse(planWidth*.394,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.478,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.386,yFactor+planHeight*.423,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.473,yFactor+planHeight*.440,classroomEllipseSize,classroomEllipseSize);
    //place cafeteria
    fill(c_cafe);
    ellipse(planWidth*.548,yFactor+planHeight*.751,classroomEllipseSize*2,classroomEllipseSize*2);
    //place specials
    fill(c_specials);
          //gym
          ellipse(planWidth*.807,yFactor+planHeight*.429,classroomEllipseSize*2,classroomEllipseSize*2);
          //art
          ellipse(planWidth*.583+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
          //music
          ellipse(planWidth*.68+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    //place 5th grade
    fill(c_5);
    ellipse(planWidth*.51+planShift_X,yFactor+planHeight*.7,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.55+planShift_X,yFactor+planHeight*.79,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.61+planShift_X,yFactor+planHeight*.78,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.67+planShift_X,yFactor+planHeight*.77,classroomEllipseSize,classroomEllipseSize);
  }
//block 7
  if(bellIndex>54 && bellIndex<65){
    rect(10,windowHeight-20,(windowWidth/65)*2,windowHeight-(barHeight*(2/48)+20));
    rect((windowWidth/65)*2,windowHeight-20,(windowWidth/65)*14,windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*14,windowHeight-20,(windowWidth/65)*25, windowHeight-(barHeight*(26/48)+20));
    rect((windowWidth/65)*25,windowHeight-20,(windowWidth/65)*35, windowHeight-(barHeight*(19/48)+20));
    rect((windowWidth/65)*35,windowHeight-20,(windowWidth/65)*45,windowHeight-(barHeight*(20/48)+20));
    rect((windowWidth/65)*45,windowHeight-20,(windowWidth/65)*54,windowHeight-(barHeight*(19/48)+20));
    rect((windowWidth/65)*54,windowHeight-20,mouseX,windowHeight-(barHeight*(23/48)+20));
    //place kindergarten
    fill(c_K);
    ellipse(planWidth*.167,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.242,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.325,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.201,yFactor+planHeight*.389,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.288,yFactor+planHeight*.408,classroomEllipseSize,classroomEllipseSize);
    //place 1st grade
    fill(c_1);
    ellipse(planWidth*.394,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.478,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.386,yFactor+planHeight*.423,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.473,yFactor+planHeight*.440,classroomEllipseSize,classroomEllipseSize);
    //place 2nd grade
    fill(c_2);
    ellipse(planWidth*.242+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.325+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.201+planShift_X,yFactor+planHeight*.389,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.288+planShift_X,yFactor+planHeight*.408,classroomEllipseSize,classroomEllipseSize);
    //place 3rd grade
    fill(c_3);
    ellipse(planWidth*.394+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.478+planShift_X,yFactor+planHeight*.235,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.386+planShift_X,yFactor+planHeight*.423,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.473+planShift_X,yFactor+planHeight*.440,classroomEllipseSize,classroomEllipseSize);
    //place 4th grade
    fill(c_5);
    ellipse(planWidth*.51+planShift_X,yFactor+planHeight*.7,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.55+planShift_X,yFactor+planHeight*.79,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.61+planShift_X,yFactor+planHeight*.78,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.67+planShift_X,yFactor+planHeight*.77,classroomEllipseSize,classroomEllipseSize);
    //place 5th grade
    fill(c_5);
    ellipse(planWidth*.51+planShift_X,yFactor+planHeight*.7,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.55+planShift_X,yFactor+planHeight*.79,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.61+planShift_X,yFactor+planHeight*.78,classroomEllipseSize,classroomEllipseSize);
    ellipse(planWidth*.67+planShift_X,yFactor+planHeight*.77,classroomEllipseSize,classroomEllipseSize);

  }

  strokeWeight(1);
  stroke(200);
  line(10,windowHeight-(barHeight*(1)),windowWidth-21,windowHeight-(barHeight*(1)));
  line(10,windowHeight-(barHeight*(.75)),windowWidth-21,windowHeight-(barHeight*(.75)));
  line(10,windowHeight-(barHeight*(.5)),windowWidth-21,windowHeight-(barHeight*(.5)));
  line(10,windowHeight-(barHeight*(.25)),windowWidth-21,windowHeight-(barHeight*(.25)));
  textSize(16);
  fill(255);
  text("100%", 18, windowHeight-(barHeight*(1)));
  text("75%", 18, windowHeight-(barHeight*(.75)));
  text("50%", 18, windowHeight-(barHeight*(.50)));
  text("25%", 18, windowHeight-(barHeight*(.25)));


////////////////////////////////////////////////////////////////////////
  //place media center
  //fill(c_media);
  //ellipse(planWidth*.617,yFactor+planHeight*.495,classroomEllipseSize*2,classroomEllipseSize*2);
}


/*
//place admin
fill(c_admin);
ellipse(planWidth*.774,yFactor+planHeight*.72,classroomEllipseSize*1.5,classroomEllipseSize*1.5);
ellipse(planWidth*.58,yFactor+planHeight*.23,classroomEllipseSize*.75,classroomEllipseSize*.75);
*/
