/**
 * 
 */
let categories=[]

//csvのロードを行う，処理はsetupで行う点に注意
function preload(){
  sheet_data = loadTable('books_info/no1.csv', 'csv', 'header');
}

function setup() {
  //----------csvの処理--------------
  names = sheet_data.getColumn('書名');
  urls = sheet_data.getColumn('URL');
  //console.log(names);
  //console.log(urls);
  createCanvas(1900, 1000);
  //----------categoryの処理--------------
  category_str=["就活関係","マンガでわかるシリーズ","今すぐ使えるかんたんシリーズ","TOEIC","アカデミックスキル"]
  for(let i=0;i<category_str.length;i++){
    let tmp_str=category_str[i];
    console.log(tmp_str);
    let c=new category(tmp_str,i);
    categories.push(c);
  }
  //----------bookの処理--------------
  num = 5
  x_interval = width/num
  y_interval = height/2 -20
  for(let i=0;i<num;i++){
    //b= new book(x_interval-50,y_interval, x_interval*i,height/4+10,'https://elib.maruzen.co.jp/app/images/l/2/3000072732.jpg')
    b= new book(x_interval-50,y_interval, x_interval*i,height/4+10);
    categories[0].addBookArr(b);
  }
}

function draw() {
  background(220);
  //----------categoryの描画--------------
  // 2分割 1/8, ３分割 1/12
  for(let i=0;i<categories.length;i++){
    if(i<2){
      categories[i].showCategoryRect(10,10+i*(height/8),width-30,height/8-10);
    }else if(i<4){
      categories[i].showCategoryRect(10,10+(4+i)*(height/8),width-30,height/8-10);
    }
    //categories[i].getCategoryName();
  }
  //----------bookの描画--------------
  for(let i=0;i<5;i++){
    categories[0].getBookArr(i).showNonImage();
    //books[i].show();
  }

  //----------デバッグ用---------
  line(0,height/4,width,height/4);
  line(0,height*3/4,width,height*3/4);
}
