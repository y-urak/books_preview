class category{
    constructor(s,num){
        this.name=s;
        this.keyNum=num;
        this.bookArr=[];
    }
    showCategoryRect(x,y,w,h){
        colorMode(HSB);
        fill(255, 204, 100);
        rect(x,y,w,h);
        fill(150, 50, 200);
        textSize(40);
        textAlign(CENTER, CENTER);
        //text(this.name,int((w-x)/2),int(h-y)/2);
        text(this.name,(w-x)/2,y+h/2);
    }
    getCategoryName(){
        console.log(this.keyNum,this.name);
    }
    addBookArr(book){
        this.bookArr.push(book);
    }
    getBookArr(num){
        return this.bookArr[num]
    }
}