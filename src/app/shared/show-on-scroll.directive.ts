import { Directive, Input, HostListener, Inject, HostBinding } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Directive({
  selector: '[appShowOnScroll]'
})
export class ShowOnScrollDirective {
  private VISIBLE = '1';
  private HIDDEN = '0';

  @Input() r4ShowOnScroll: number = 200;

  @HostBinding('style.opacity') style = this.HIDDEN;

  public constructor( @Inject(DOCUMENT) private document: any) {
  }

  @HostListener('document:scroll', ['$event'])
  public onScroll(event: Event): void {
    const scrollTop: number = document.body.scrollTop;
    if (this.r4ShowOnScroll < scrollTop) {
      this.style = this.VISIBLE;
    } else {
      this.style = this.HIDDEN;
    }
  }
}
