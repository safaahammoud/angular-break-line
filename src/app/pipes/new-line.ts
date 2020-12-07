import { ElementRef } from "@angular/core";

export class NewLineUtil {
  public static transform(element: ElementRef, value: string) {
    element.nativeElement.innerHTML = value;
  }
}
