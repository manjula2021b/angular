import { Directive,ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
constructor(private el:ElementRef, private renderer:Renderer2){
  el.nativeElement.style.color="yellow";
  el.nativeElement.style.backgroundColor="lightpink";
  el.nativeElement.style.width="500px"
}
ngOnInit(){
  this.renderer.setStyle(this.el.nativeElement,'background-color','darkblue');
  this.renderer.setStyle(this.el.nativeElement,'width','400px');
}


//this is for color changing using binding functions

@HostBinding("style.backgroundColor") bgColor;
@HostListener('mouseenter') mousseenter(){
  this.changeColor("green");
  this,this.bgColor="yellow"
}
changeColor(color){
  this.el.nativeElement.style.color=color;
}
@HostListener('mouseleave') mouseleave(){
  this.changeLeaveColor("red");
}
changeLeaveColor(color){
  this.el.nativeElement.style.color=color;
}


// pipes


}
