import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedE1]'
})
export class RedE1Directive {

  constructor(e1: ElementRef) {
    e1.nativeElement.style.color="red"
   }

}
