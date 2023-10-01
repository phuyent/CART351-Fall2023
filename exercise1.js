//Source code: Based on JavaScript object review of CART 351 - Week 2.
window.onload = function(){
    console.log('exercise 1');
    
    //SHAPE CLASS (OBJECT)
       class DemoShape {
        //Constructor
        constructor(x,y,r,g,b) {

        //Position
        this.x = x;
        this.y = y;
    
        //Original position:
        this.orig_x = x;
        this.orig_y = y;
    
    
        //Movement (NOT USE YET)
        this.speedX = Math.random()*4;
        this.speedY = Math.random()*4;
    
        //Color
        this.a = 1.0;
        this.col = "rgba("+r+","+g+","+b+","+this.a+")";
    
        //Create an html element
        this.el = document.createElement('div');
        this.el.classList.add('squ');
    
        //Add background col
        this.el.style.background = this.col;
        //left and top positions.
        this.el.style.left =this.x+"px";
        this.el.style.top= this.y+"px";
    
        //Use DOM method for appending
        document.getElementById('parent').appendChild(this.el);
    
    
        //Add an event listener (to this object) 
        //Mousedown response
        this.el.addEventListener("mousedown", this.shapeChange);
    
      } 
      //End constructor



    //The callback 
      shapeChange(){
        //Toggle shape from CSS
      if(this.classList.contains('circ'))
      {
        this.classList.remove('circ');
        this.classList.add('squ');
    
      }
      else{
        this.classList.remove('squ');
        this.classList.add('circ');
      }
    
      }
    } 
    
    
    
    //CUSTOM FUNCTION
    //Number rows and cols
    createTheBoxes(10,10);
    
    function createTheBoxes(numRows, numCols){
    
      for(let i=0; i<numCols ; i++){
    
        for(let j=0; j<numRows;j++){
          // generate random colors...
          let r = Math.floor(Math.random()*255);
          let g = Math.floor(Math.random()*255);
          let b = Math.floor(Math.random()*255);
    
          new DemoShape((i+1)*50,(j+2)*50,r,g,b);
        }
      }
    }
    
    
    }//onload ends
    