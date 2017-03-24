import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: './map.component.html'
})
export class MapComponent {
  @ViewChild('mapContainer')
  mapContainerRef: ElementRef;

  pointerEventsValue:string = "none";

  mapClick():void {
    this.pointerEventsValue = "auto";
  }

  mapLeave(): void {
    this.pointerEventsValue = "none";    
  }
}