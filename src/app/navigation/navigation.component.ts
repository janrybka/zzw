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
export class NavigationComponent {

  menuVisible: boolean = false;

  public constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    PageScrollConfig.defaultDuration = 300;
  }

  navigate(anchor: string): void {
    this.menuVisible = false;

    if (!anchor) { return; }
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, anchor);
    this.pageScrollService.start(pageScrollInstance);
  }
}