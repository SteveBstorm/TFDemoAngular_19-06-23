import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private elem : ElementRef
  ) { }

  private previousColor!: string

  @HostListener('mouseenter') onMouseEnter() {
    this.previousColor = this.elem.nativeElement.style.backgroundColor
    this.highlight("blue")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.previousColor);
  }

  highlight(color : string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
