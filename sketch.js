function setup() {
    createCanvas(600, 600);
     background("blue");
  }
  
  function draw() {
    
    stroke("blue");
    fill("orange");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
       rect(mouseX, mouseY, 20, 35);
      }
  }