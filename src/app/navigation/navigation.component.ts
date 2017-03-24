import { Component, Inject } from "@angular/core";
import { PageScrollService, PageScrollInstance, PageScrollConfig } from "ng2-page-scroll/ng2-page-scroll";
import { DOCUMENT } from "@angular/platform-browser";

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
    if (!anchor) { return; }

    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, anchor);
    this.pageScrollService.start(pageScrollInstance);
    this.menuVisible = false;
  }
}