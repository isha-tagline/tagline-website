import { Component } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent {
  public arrowImg : string = "";

    public developers : Developers[] = [
      {
        h6 : "Hire Mobile App Developers",
        class : "col-6 row",
        details : [
          {
            imgPath : "assets/image/react_native_color.svg",
            p : "Hire React Native     Developers",
            className : "col-6"
          },
          {
            imgPath : "assets/image/flutter_color.svg",
            p : "Hire Flutter Developers",
            className : "col-6"
          },
        ] 
      },
      {
        h6 : "Hire Front-End Developers",
        class : "col-6 row",
        details : [
          {
            imgPath : "assets/image/angular_color.svg",
            p : "Hire AngularJs    Developers",
            className : "col-6"
          },
          {
            imgPath : "assets/image/react_native_color.svg",
            p : "Hire ReactJs    Developers",
            className : "col-6"
          },
        ]
      },
      {
        h6 : "Hire Back-End Developers",
        class : "col-12 row",
        details : [
          {
            imgPath : "assets/image/paython_color.svg",
            p : "Hire Python    Developers",
            className : "col-4"
          },
          {
            imgPath : "assets/image/ruby_color.svg",
            p : "Hire ROR Developers",
            className : "col-4"
          },
          {
            imgPath : "assets/image/node_js_color.svg",
            p : "Hire Node.js    Developers",
            className : "col-4"
          },
        ]
      }
    ]
}

interface Developers{
 h6 : string
 class : string
 details : H6[]
}

interface H6{
  imgPath : string,
  p : string,
  className : string
}
