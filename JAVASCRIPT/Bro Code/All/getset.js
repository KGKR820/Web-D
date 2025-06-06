class rectangle{
    constructor(width,height){
        this._width = width;
        this._height = height;
    }
    set width(value){
        if(value > 0){
            this._width = value;
        }
        else{
            console.log("Width must be Positive");
        }
    }
    set height(value){
        if(value > 0){
            this._height = value;
        }
        else{
            console.log("height must be Positive");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get Area(){
        return this._width * this._height;
    }
}
const Rect = new rectangle(90,9);
console.log(Rect.width);
console.log(Rect.Area);