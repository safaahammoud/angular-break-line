import { Component, ElementRef, VERSION } from "@angular/core";
import { AfterViewInit, OnInit, QueryList, ViewChildren } from "@angular/core";
import { NewLineUtil } from "./pipes/new-line";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  name = "Angular " + VERSION.major;
  items: Array<any>;
  withBreaks: string;
  withBreaksHtml: string;
  @ViewChildren("templateElementDiv") templateElementDiv: QueryList<any>;

  constructor() {}

  ngOnInit(): void {
    this.withBreaks = `What is Lorem Ipsum?
  
               Lorem Ipsum is simply dummy text of theprintintypesetting industry.\n&bull; Break Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n&bull; It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    this.withBreaksHtml = `<p>What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>&bull; Break Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>&bull; It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`;
    this.items = [
      {
        id: 1,
        bgColor: "#FFE4B5",
        title: "my name",
        description: "hi my name is Safaa <br/> I love dancing"
      },
      {
        id: 2,
        bgColor: "#E9967A",
        title: "what i do",
        description:
          "Program web applications <br/> write blogs that makes difference in the industry and saves developers life"
      },
      {
        id: 3,
        bgColor: "#008080",
        title: "what people think i do",
        description:
          "<p>Hack facebook,twitter,google accounts,<br/> play games with best graphics card</p>"
      }
    ];
  }

  ngAfterViewInit() {
    this.items.forEach(accordionPanel => {
      this.templateElementDiv.forEach(templateChildElement => {
        if (accordionPanel.id === +templateChildElement.nativeElement.id) {
          NewLineUtil.transform(
            templateChildElement,
            accordionPanel.description
          );
        }
      });
    });
  }
}
