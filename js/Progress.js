let Progress=function (draw,x,y,w,h) {
    this.draw=draw;
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
};
Progress.prototype.render=function () {
    this.draw.fillStyle="green";
    this.draw.fillRect(this.x,this.y,this.w,this.h);
};
Progress.prototype.update=function (w) {
    this.w=w;
};
