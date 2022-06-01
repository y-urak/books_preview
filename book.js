class book{
    constructor(w,h,x,y){
        this.w=w
        this.h=h
        this.x=x
        this.y=y

    }
    show(){
        rect(this.x,this.y,this.w,this.h);
    }
}