var plan_level_1, plan_level_2;
var planRatio =11/16;
var transparency = 120;
var c_K, c_1, c_2, c_3, c_4, c_5, c_cafe, c_media, c_specials, c_admin, c_secEd, c_ui;
var L1_roomLocations_X = [10,200,300];
var planShift_X, planShift_Y;
var coor_admin, coord_nurse;
var coord_k_1, coord_k_2, coord_k_3, coord_k_4;
var coord_1_1, coord_1_2, coord_1_3, coord_1_4;
var coord_2_1, coord_2_2, coord_2_3, coord_2_4, coord_3_1, coord_3_2;
var coord_3_3, coord_3_4, coord_4_1, coord_4_2, coord_4_3, coord_4_4;
var coord_5_1, coord_5_2, coord_5_3, coord_5_4;
var coord_gym, coord_media, coord_art, coord_music, cafeteria;
var schedule = [];
var coordinates = [];
var k_homeroom, cafeteria, specials, first_homeroom, second_homeroom,
    third_homeroom, fourth_homeroom, fifth_homeroom;

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
  c_resourceRoom = color(255, 0, 0, transparency);

  //define coordinates
  var coordOn = 'yes';
  if(coordOn == 'yes'){
    coor_admin = [.774, .72];
    coord_nurse = [.58, .23];
    coord_k_1 = [.242, .235];
    coord_k_2 = [.325, .235];
    coord_k_3 = [.201, .389];
    coord_k_4 = [.288, .408];
    coord_1_1 = [.394, .235];
    coord_1_2 = [.478, .235];
    coord_1_3 = [.386, .423];
    coord_1_4 = [.473, .440];
    coord_2_1 = [1.242, .235];
    coord_2_2 = [1.325, .235];
    coord_2_3 = [1.201, .389];
    coord_2_4 = [1.288, .408];
    coord_3_1 = [1.394, .235];
    coord_3_2 = [1.478, .235];
    coord_3_3 = [1.386, .423];
    coord_3_4 = [1.473, .440];
    coord_4_1 = [1.81, .59];
    coord_4_2 = [1.82, .67];
    coord_4_3 = [1.8, .76];
    coord_4_4 = [1.73, .77];
    coord_5_1 = [1.51, .7];
    coord_5_2 = [1.55, .79];
    coord_5_3 = [1.61, .78];
    coord_5_4 = [1.67, .77];
    coord_gym = [.807, .429];
    coord_media = [.617, .495];
    coord_art = [1.583, .235];
    coord_music = [1.68, .235];
    cafeteria = [.548, .751];

    k_homeroom = [(coord_k_1[0]+coord_k_2[0]+coord_k_3[0]+coord_k_4[0])/4, (coord_k_1[1]+coord_k_2[1]+coord_k_3[1]+coord_k_4[1])/4];
    first_homeroom = [(coord_1_1[0]+coord_1_2[0]+coord_1_3[0]+coord_1_4[0])/4, (coord_1_1[1]+coord_1_2[1]+coord_1_3[1]+coord_1_4[1])/4];
    second_homeroom = [(coord_2_1[0]+coord_2_2[0]+coord_2_3[0]+coord_2_4[0])/4, (coord_2_1[1]+coord_2_2[1]+coord_2_3[1]+coord_2_4[1])/4];
    third_homeroom = [(coord_3_1[0]+coord_3_2[0]+coord_3_3[0]+coord_3_4[0])/4, (coord_3_1[1]+coord_3_2[1]+coord_3_3[1]+coord_3_4[1])/4];
    fourth_homeroom = [(coord_4_1[0]+coord_4_2[0]+coord_4_3[0]+coord_4_4[0])/4, (coord_4_1[1]+coord_4_2[1]+coord_4_3[1]+coord_4_4[1])/4];
    fifth_homeroom = [(coord_5_1[0]+coord_5_2[0]+coord_5_3[0]+coord_5_4[0])/4, (coord_5_1[1]+coord_5_2[1]+coord_5_3[1]+coord_5_4[1])/4];
    specials = [(coord_gym[0]+coord_media[0]+coord_art[0]+coord_music[0])/4, (coord_gym[1]+coord_media[1]+coord_art[1]+coord_music[1])/4];
  }

  schedule = [['kindergarten', k_homeroom, k_homeroom, k_homeroom, k_homeroom, cafeteria, k_homeroom, k_homeroom, specials],
              ['first grade', first_homeroom, first_homeroom, first_homeroom, cafeteria, first_homeroom, first_homeroom, specials, first_homeroom],
              ['second grade', second_homeroom, second_homeroom, specials, second_homeroom, second_homeroom, cafeteria, second_homeroom, second_homeroom],
              ['third grade', third_homeroom, third_homeroom, third_homeroom, specials, third_homeroom, cafeteria, third_homeroom, third_homeroom],
              ['fourth grade', fourth_homeroom, fourth_homeroom, fourth_homeroom, cafeteria, fourth_homeroom, specials, fourth_homeroom, fourth_homeroom],
              ['fifth grade', fifth_homeroom, specials, fifth_homeroom, fifth_homeroom, cafeteria, fifth_homeroom, fifth_homeroom, fifth_homeroom]
            ];


/*
  console.log(schedule[0][0]);
  console.log(schedule[0][1][0]);
  console.log(schedule[0][1][1]);
  console.log(schedule[0][2][0]);
  console.log(schedule[0][2][1]);
  console.log('distance');
  console.log(dist(schedule[0][1][0],schedule[0][1][1],schedule[0][2][0], schedule[0][2][1]));
  console.log('------------------');
*/
  for(i = 0; i<schedule.length; i+=1){
    for(p = 1; p<8; p+=1){
    console.log(schedule[i][0]);
    console.log(schedule[i][p][0]);
    console.log(schedule[i][p][1]);
    console.log(schedule[i][p+1][0]);
    console.log(schedule[i][p+1][1]);
    console.log('distance');
    console.log(dist(schedule[i][p][0],schedule[i][p][1],schedule[i][p+1][0],schedule[i][p+1][1]));
    console.log('------------------');
    }
  }
}

function draw() {

  ////////////////////////////////////////////////////////////redraw background and plans
  background(51);
  planWidth = windowWidth/2;
  planHeight = planWidth*planRatio;
  planShift_X = windowWidth - planWidth;
  planShift_Y = (windowHeight/2)-(planHeight/2);

  image(plan_level_1, windowWidth/4,windowHeight/2, planWidth,planHeight);
  image(plan_level_2, (windowWidth/4)*3,windowHeight/2, planWidth,planHeight);

  ////////////////////////////////////////////////////////////draw title text
  noStroke();
  fill(255);
  textSize(20);
  text("Hildreth Elementary School",10,32);
  textSize(12);
  text("Building Utilization Study",10,52);

  noStroke();
  var yFactor = ((windowHeight/2)-(planHeight/2));

  ////////////////////////////////////////////////////////////draw students

  drawStudent(coord_k_1, c_K);
  drawStudent(coord_k_2, c_K);
  drawStudent(coord_k_3, c_K);
  drawStudent(coord_k_4, c_K);
  drawStudent(coord_1_1, c_1);
  drawStudent(coord_1_2, c_1);
  drawStudent(coord_1_3, c_1);
  drawStudent(coord_1_4, c_1);
  drawStudent(coord_2_1, c_2);
  drawStudent(coord_2_2, c_2);
  drawStudent(coord_2_3, c_2);
  drawStudent(coord_2_4, c_2);
  drawStudent(coord_3_1, c_3);
  drawStudent(coord_3_2, c_3);
  drawStudent(coord_3_3, c_3);
  drawStudent(coord_3_4, c_3);
  drawStudent(coord_4_1, c_4);
  drawStudent(coord_4_2, c_4);
  drawStudent(coord_4_3, c_4);
  drawStudent(coord_4_4, c_4);
  drawStudent(coord_5_1, c_5);
  drawStudent(coord_5_2, c_5);
  drawStudent(coord_5_3, c_5);
  drawStudent(coord_5_4, c_5);
  drawStudent(coord_gym, c_specials);
  drawStudent(coord_media, c_specials);
  drawStudent(coord_music, c_specials);
  drawStudent(coord_art, c_specials);
  drawStudent(cafeteria, c_cafe);

}

function drawStudent(type, color){
  fill(color);
  ellipse(planWidth*type[0], (planHeight*type[1])+planShift_Y, 40,40);
}
