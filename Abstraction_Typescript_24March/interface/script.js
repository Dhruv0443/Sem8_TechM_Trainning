//Concrete clases implementing Shape interface
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        return "Drawing a Circle";
    };
    return Circle;
}());
var Reactangle = /** @class */ (function () {
    function Reactangle() {
    }
    Reactangle.prototype.draw = function () {
        return "Drawing a Rectangle";
    };
    return Reactangle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        return "Drawing a Square";
    };
    return Square;
}());
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.getShape = function (shapeType) {
        switch (shapeType.toLowerCase()) {
            case "circle":
                return new Circle();
            case "rectangle":
                return new Reactangle();
            case "square":
                return new Square();
            default:
                return null;
        }
    };
    return ShapeFactory;
}());
//Handling UI Interaction
document.addEventListener("DOMContentLoaded", function () {
    var shapeSelect = document.getElementById("shapeSelect");
    var drawButton = document.getElementById("drawButton");
    var outputDiv = document.getElementById("output");
    drawButton.addEventListener("click", function () {
        var shapeType = shapeSelect.value;
        var shape = ShapeFactory.getShape(shapeType);
        if (shape) {
            outputDiv.innerText = shape.draw();
        }
        else {
            outputDiv.innerText = "Invalid shape selection";
        }
    });
});
