/**
 * 
 */
let books =[]

//csvのロードを行う，処理はsetupで行う点に注意
function preload(){
  sheet_data = loadTable('books_info/no1.csv', 'csv', 'header');
}

function setup() {
  names = sheet_data.getColumn('書名');
  urls = sheet_data.getColumn('URL');
  //console.log(names);
  //console.log(urls);
  createCanvas(1900, 1000);
  num = 5
  x_interval = width/num
  y_interval = height/2 -20
  for(let i=0;i<num;i++){
    //b= new book(x_interval-50,y_interval, x_interval*i,height/4+10,'https://elib.maruzen.co.jp/app/images/l/2/3000072732.jpg')
    //
    b= new book(x_interval-50,y_interval, x_interval*i,height/4+10);
    books.push(b);
  }
}

function draw() {
  background(220);
  for(let i=0;i<books.length;i++){
    books[i].showNonImage();
    //books[i].show();
  }
  colorMode(HSB);
  fill(255, 204, 100);
  rect(10,500,200,300);
  line(0,height/2,width,50);
  //line(0,height/8,width,height/8);
  line(0,height/12,width,height/12);
  line(0,height*2/12,width,height*2/12);
  line(0,height/4,width,height/4);
  line(0,height*3/4,width,height*3/4);
  line(0,height*7/8,width,height*7/8);
}
