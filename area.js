const sides = document.querySelectorAll(".input");
const calculate =document.querySelector("#calculate-btn");
const output = document.querySelector("#output");


function sumOfSides(a,b){
    const area = a + b
    // console.log(area)
    return area
}


function calculateArea(){
    const area = 
    sumOfSides(Number(sides[0].value),
    Number(sides[1].value));
    console.log(area)
    const areaOfTriangle = ((1/2)*area)
    // console.log(areaOfTriangle)
    output.innerText="The area of the rectangle is " + String(areaOfTriangle)

}

// output.innerText="The area of the rectangle is " + areaOfTriangle


calculate.addEventListener("click",calculateArea);