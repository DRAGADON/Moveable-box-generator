import { Component } from '@angular/core';

var boxId = 100;

function myBox() { 

  var uBoxId = boxId++;
  var zindex = uBoxId;
  
  var box = document.createElement("button");
  var boxName = document.createTextNode('Box ' + uBoxId);
  box.appendChild(boxName);

  box.className = "btn btn-primary";
  box.style.margin = "2px";
  box.style.height = "100px";
  box.style.width = "100px";
  box.style.position = "relative";
  box.id = (uBoxId).toString();
  box.setAttribute("z-index",zindex.toString());
  box.addEventListener("click",onBoxClicked);

  var elem = document.getElementById("addBox");   
  elem.appendChild(box);   

  function onBoxClicked(){

    document.getElementById(uBoxId.toString()).onkeydown = function(e){
      
      switch (e.key) { 
        case "ArrowLeft": 
            moveLeft();
            break;
        case "a": 
            moveLeft();
            break;
        case "A":
            moveLeft();
            break;     
        case "ArrowRight": 
            moveRight();
            break;
        case "d": 
            moveRight();
            break;
        case "D": 
            moveRight();
            break;         
        case "ArrowUp": 
            moveUp();
            break;
        case "w": 
            moveUp();
            break;
        case "W": 
            moveUp();
            break;         
        case "ArrowDown": 
            moveDown();
            break;
        case "s": 
            moveDown();
            break;
        case "S": 
            moveDown();
            break; 
        case "Delete":
            deleteBox();
            break;
      } 
    };

  }

  function moveLeft(){    
    console.log('left');
    box.style.left = '-40px';      
  }

  function moveRight(){
    console.log('right');
    box.style.left = '+40px';   
  }

  function moveUp(){
    console.log('up');
    box.style.top = '-40px';
  }

  function moveDown(){
    console.log('down');
    box.style.top = '+40px'
  }

  function deleteBox(){
    console.log('delete');
    var remove = document.getElementById(uBoxId.toString());
    remove.remove();
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  checkboxFlag: boolean;

  onAdd() {    
    myBox();
  }  

  onChecked(checkStatus:boolean){
    this.checkboxFlag = checkStatus;
    if(checkStatus){
      console.log(this.checkboxFlag);
    }
    else{
      console.log(this.checkboxFlag);      
    }    
  }

}
