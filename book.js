class book{
    constructor(w,h,x,y,url){
        this.w=w
        this.h=h
        this.x=x
        this.y=y
        this.img = createImg(url);
    }
    show(){
        rect(this.x,this.y,this.w,this.h);
        let image_x=this.x+this.w*1/6
        let image_y=this.y+this.h*1/8
        image(this.img,image_x,image_y, this.img.width *0.8, this.img.height *0.8);
    }
}