//complete this code
class Rectangle {
	constructor(width, height){
		this.widthVal = width;
		this.heightVal = height;
	}
	get width(){
		return this.widthVal;
	}
	get height(){
		return this.heightVal;
	}
	getArea(){
		return this.widthVal * this.heightVal;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
		this.side = side;
	}
	getPerimeter(){
		return 4*this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
