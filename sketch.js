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
  console.log(names);
  console.log(urls);
  createCanvas(1900, 1000);
  num = 5
  x_interval = width/num
  y_interval = height/10 * 9
  for(let i=0;i<num;i++){
    b= new book(x_interval-50,y_interval, x_interval*i,10,'https://elib.maruzen.co.jp/app/images/l/2/3000072732.jpg')
    books.push(b)
  }
}

function draw() {
  background(220);
  for(let i=0;i<books.length;i++){
    books[i].show()
  }
}
