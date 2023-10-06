import { Component } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent {
  public title : string = "Case Studies"
  public caseArr : Case[] = [
    {
      imgPath : "assets/image/wrapper1.webp",
      src : 'assets/image/white-logo1.png',     
      p : "Recognition, manage nominations, offer rewards, & automate service anniversaries. By developing such a recognized application.",
      className : "blue-box col-5",
    },
    {
      imgPath : "assets/image/warpper2.webp",
      src : 'assets/image/white-logo2.png',
      p : "Replace confusing spreadsheets with marketing calendar software built for marketing teams.",
      className : " yellow-box col-7",
    },
    {
      imgPath : "assets/image/wrapper3.webp",
      src : 'assets/image/white-logo3.png',
      p : "Make better stock investing decisions by joining the most exclusive community of stock investors. Learn, share & grow through authentic real-time discussion.",
      className : " gray-box col-6",
    },
    {
      imgPath : "assets/image/wrapper5.webp",
      src : 'assets/image/white-logo4.png',
      p : "Complete Business Solutions for your dental clinic.",
      className : " green-box col-3",
    },
    {
      imgPath : "assets/image/wrapper6.webp",
      src : 'assets/image/white-logo5.png',
      p : "Build Healthy Habits. Stay Accountable. Share, Learn & Act on Insights.",
      className : " light-box col-3",
    },
  ]
}

interface Case{
  imgPath : string,
  src : string,
  p:string,
  className : string
}
