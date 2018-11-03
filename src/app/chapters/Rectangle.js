class Rectangle {
    constructor(height, width) {
      this.name = 'Rectangle';
      this.height = height;
      this.width = width;
    }
    sayName() {
      console.log('Hi, I am a ', this.name + '.');
    }
    area() {
      return this.height * this.width;
    }
    area(value) {
      this.height = this.width = Math.sqrt(value);
    }
  }

  class Square extends Rectangle {
    constructor(length) {
        super(length, length);

      this.height = length; // ReferenceError, super needs to be called first!
      
      // Here, it calls the parent class' constructor with lengths
      // provided for the Rectangle's width and height
      
      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.
      this.name = 'Square';
    }
   area = () => {
       super.area();
   }
  }

  

  console.log(Square.name);
  var square = new Square(5)
square.area();