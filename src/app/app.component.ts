import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
  }

  @ViewChild('div') div: ElementRef;
  constructor (private renderer: Renderer2){
  }
  boxId: number = 101;
  
  onAdd() {
    
    this.boxId = this.boxId + 1;

    var button: HTMLButtonElement = this.renderer.createElement('button'); 
    button.setAttribute('class','btn btn-primary box');
    button.setAttribute('type','button');
    button.setAttribute('id',this.boxId.toString());  //unique id number
    button.setAttribute('z-index',this.boxId.toString());  // z index
    button.setAttribute('position','relative');
    button.setAttribute('value','Box' + this.boxId.toString());  //box name

    /*not able to add (click) to button due to which not able
     to proceed forward with this approach*/ 
    //button.setAttribute('(click)','onBoxClicked()');

    button.innerHTML =  'Box' + this.boxId;

    this.renderer.appendChild(this.div.nativeElement, button); 
  }  

  onBoxClicked(){
    console.log('click event');
    /* check which button was clicked and add transform/animation effect to move elements 
      when the keys are pressed both w,a,s,d and arrow key. 
       Keycodes for arrows are followed:
        left = 37
        up = 38
        right = 39
        down = 40
      Also listen for delete key press event to delete the element.
        */
  }

}