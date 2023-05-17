let colorArco;
let colorAgua;
let colorReloj;
let img1;
let img2;
let hx1, hx2, hx3, hx4, hx5, hx6, hx7, hx8, hx9;
let hy1, hy2, hy3, hy4, hy5, hy6, hy7, hy8, hy9;



function setup() {
  createCanvas(400, 325);
  frameRate();
  colorAgua = color(61, 75, 49);
  colorArco = color(51);
  colorReloj = color("beige");
  hx1 = 323;
  hx2 = 332;
  hx3 = 333;
  hx4 = 335;
  hx5 = 318;
  hx6 = 338;
  hx7 = 342;
  hx8 = 322;
  hx9 = 326;
  hy1 = 119;
  hy2 = 108;
  hy3 = 118;
  hy4 = 116;
  hy5 = 120;
  hy6 = 112;
  hy7 = 106;
  hy8 = 114;
  hy9 = 110;
}

function draw() {
   //image(img1,0,0);
  //image(img2, 300, 180)
  background(212, 172, 13);
  noStroke();
  fill(18, 75, 59);
  rect(0, 0, 400, 150);
  fill(99, 153, 101);
  rect(301, 85, 400, 50);
  fill(141, 91, 40);
  rect(301, 135, 101, 17);
  strokeWeight(6);
  stroke(81, 145, 100, 255);
  line(301, 99, 400, 99);
  stroke(143, 186, 111, 255);
  line(301, 91, 400, 91);
  strokeWeight(8);
  stroke(4, 62, 96, 255);
  line(110, 0, 400, 0);

  //tren
  strokeWeight(3);
  stroke(49);
  point(337, 134);
  point(328, 134);
  strokeWeight(6);
  noStroke();
  fill(81, 84, 47);
  fill(49, 59, 14);
  rect(308, 125, 10);
  rect(320, 129, 7);
  rect(329, 129, 7);
  rect(338, 129, 7);
  stroke(222);
  fill(200);
  ellipse(hx1, hy1, 4);
  ellipse(hx2, hy2, 4);
  stroke(185);
  ellipse(hx3, hy3, 4);
  ellipse(hx4, hy4, 4);
  stroke(200);
  ellipse(hx5, hy5, 4);
  ellipse(hx6, hy6, 4);
  ellipse(hx7, hy7, 4);
  stroke(175);
  ellipse(hx8, hy8, 4);
  ellipse(hx9, hy9, 4);
  push();

  //pileta
  noStroke();
  fill(107, 75, 24);
  quad(165, 290, 295, 294, 250, 210, 215, 205); //sombra
  colorAgua = color(61, 75, 49);
  fill(colorAgua); //verde
  quad(178, 283, 295, 291, 257, 210, 217, 207);
  //agua
  stroke(212, 192, 132);
  strokeWeight(5);
  quad(177, 285, 298, 290, 257, 207, 215, 205);
  stroke(110);
  strokeWeight(2);
  line(286, 282, 251, 212);
  line(251, 212, 218, 210);

  //edificio fondo
  noStroke();
  fill(110, 100, 56);
  rect(151, 61, 148, 87); //frente edificio fondo
  fill(84, 78, 45);
  triangle(149, 60, 300, 60, 224, 40);
  stroke(123, 118, 83);
  strokeWeight(4);
  line(149, 61, 149, 148); //vert izq
  stroke(116, 98, 55);
  line(149, 61, 299, 61); //horizontal
  line(299, 61, 299, 148); //vert der
  stroke(74, 85, 55);
  line(149, 60, 224, 40); //trg izq
  stroke(81, 99, 67);
  line(224, 40, 300, 60); //trg der
  noStroke();
  fill(colorArco);
  ellipse(287, 109, 19);
  rect(277, 109, 19, 33);
  ellipse(168, 108, 19); //arcos edif fondo
  rect(158, 109, 19, 33);
  ellipse(227, 109, 19);
  rect(217, 109, 19, 33);
  noStroke();
  fill(50);

  ellipse(198, 109, 19);
  rect(188, 109, 19, 38);

  ellipse(257, 109, 19);
  rect(247, 109, 19, 38);
  fill(colorArco);
  ellipse(287, 109, 19);
  rect(277, 109, 19, 38);
  fill(105, 92, 58);
  quad(149, 156, 299, 156, 295, 142, 154, 142); //escalinata edif fondo

  //reloj
  strokeWeight(1);
  stroke(50);
  fill(colorReloj);
  ellipse(224, 75, 25);
  line(224, 75, 224, 65); //reloj
  line(224, 75, 235, 75); //reloj
  //sombras
  fill(57, 72, 38);
  quad(400, 325, 300, 325, 380, 160, 400, 157);

  //sombra der
  fill(74, 69, 40);
  triangle(150, 156, 138, 186, 295, 154);

  quad(0, 0, 63, 0, 60, 282, 0, 248); //pared punta ed izq
  strokeWeight(4);
  stroke(112, 86, 32);
  line(301, 150, 400, 150);
  stroke(234);

  strokeWeight(7);
  stroke(58, 56, 30);
  line(62, 287, 0, 252); //lineas edificio izq punta
  line(63, 297, 0, 262);

  strokeWeight(3);
  line(61, 291, 0, 257);
  stroke(249, 232, 149);
  strokeWeight(6);
  line(62, 287, 134, 174); //lineas edificio izq
  line(63, 297, 136, 177);

  noStroke();
  fill(164, 138, 73);
  quad(19, 80, 19, 258, 33, 253, 34, 92);
  quad(19, 80, 19, 258, 52, 272, 52, 81);
  fill(55);
  triangle(19, 233, 19, 258, 26, 256);
  triangle(19, 258, 52, 257, 49, 271);
  fill(80, 81, 49);
  fill(204, 172, 97);
  quad(32, 251, 33, 248, 50, 247, 51, 256, 26, 254);
  fill(23);
  quad(34, 124, 45, 129, 45, 234, 33, 243);
  fill(95, 114, 90);
  quad(45, 129, 52, 131, 51, 227, 45, 233);
  fill(49, 111, 66);
  quad(44, 108, 44, 128, 34, 124, 34, 100);
  fill(53);
  quad(44, 108, 44, 128, 52, 131, 52, 113);
  fill(53);
  noStroke();
  fill(255, 249, 173);
  quad(61, 283, 63, -52, 146, 61, 148, 146);
  stroke(241, 223, 149);
  strokeWeight(7);
  line(146, 63, 105, 1);
  noStroke();
  fill(70, 72, 52);
  quad(77, 262, 77, 84, 96, 92, 96, 235);
  quad(105, 222, 105, 97, 119, 103, 119, 200);
  quad(126, 195, 126, 109, 135, 113, 135, 178);
  //piso arcos
  fill(180, 159, 93);
  triangle(105, 222, 105, 208, 118, 202);
  triangle(79, 242, 79, 262, 95, 237);
  triangle(126, 192, 126, 180, 137, 177);

  
}
