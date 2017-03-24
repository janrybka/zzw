import { Component, Inject, AfterViewInit } from "@angular/core";
import { PageScrollService, PageScrollInstance, PageScrollConfig } from "ng2-page-scroll/ng2-page-scroll";
import { DOCUMENT } from "@angular/platform-browser";

declare var $:any;

@Component({
  selector: 'zzw-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  moduleId: module.id
})
export class NavigationComponent implements AfterViewInit {

  menuVisible: boolean = false;

  public constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    PageScrollConfig.defaultDuration = 300;
  }

  navigate(anchor: string): void {
    if (!anchor) { return; }

    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, anchor);
    this.pageScrollService.start(pageScrollInstance);
    this.menuVisible = false;
  }

  ngAfterViewInit(): void {
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
  }
}