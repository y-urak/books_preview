/**
 * 
 */
let book1 = new book(10,10,100,100);
let books =[]

function setup() {
  createCanvas(1900, 1000);
  num = 5
  x_interval = width/num
  y_interval = height/10 * 9
  for(let i=0;i<num;i++){
    b= new book(x_interval-50,y_interval, x_interval*i,10)
    books.push(b)
  }
}

function draw() {
  background(220);
  for(let i=0;i<books.length;i++){
    books[i].show()
  }
}
