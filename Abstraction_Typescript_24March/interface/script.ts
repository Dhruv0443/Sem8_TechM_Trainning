//Shape interface
interface Shape{
    draw():string;
}
//Concrete clases implementing Shape interface
class Circle implements Shape{
    draw(): string {
        return "Drawing a Circle"
    }
}
class Reactangle implements Shape{
    draw(): string {
        return "Drawing a Rectangle"
    }
}
class Square implements Shape{
    draw(): string {
        return "Drawing a Square"
    }
}
class ShapeFactory{
    static getShape(shapeType:string):Shape|null{
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
    }
}
//Handling UI Interaction
document.addEventListener("DOMContentLoaded",()=>{
    const shapeSelect = document.getElementById("shapeSelect") as HTMLSelectElement;
    const drawButton = document.getElementById("drawButton") as HTMLButtonElement;
    const outputDiv = document.getElementById("output") as HTMLDivElement;

    drawButton.addEventListener("click",()=>{
        const shapeType = shapeSelect.value;
        const shape = ShapeFactory.getShape(shapeType);
        if(shape){
            outputDiv.innerText=shape.draw();
        }
        else{
            outputDiv.innerText="Invalid shape selection";
        }
    });
});