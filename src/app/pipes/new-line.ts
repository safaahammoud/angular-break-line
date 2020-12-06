import { ElementRef } from "@angular/core";

export class NewLinePipe {
  public static transform(element: ElementRef, value: string) {
    element.nativeElement.innerHTML = value;
  }
}
