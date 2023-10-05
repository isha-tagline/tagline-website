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
      src : 'assets/image/white-logo1.png',     
      p : "Recognition, manage nominations, offer rewards, & automate service anniversaries. By developing such a recognized application."
    },
    {
      src : 'assets/image/white-logo2.png',
      p : "Replace confusing spreadsheets with marketing calendar software built for marketing teams."
    },
    {
      src : 'assets/image/white-logo3.png',
      p : "Make better stock investing decisions by joining the most exclusive community of stock investors. Learn, share & grow through authentic real-time discussion."
    },
    {
      src : 'assets/image/white-logo4.png',
      p : "Complete Business Solutions for your dental clinic."
    },
    {
      src : 'assets/image/white-logo5.png',
      p : "Build Healthy Habits. Stay Accountable. Share, Learn & Act on Insights."
    },
  ]


  public imgPath1 : string = "assets/image/wrapper1.webp"
  public imgPath2 : string = "assets/image/warpper2.webp"
  public imgPath3 : string = "assets/image/wrapper3.webp"
  public imgPath4 : string = "assets/image/wrapper5.webp"
  public imgPath5 : string = "assets/image/wrapper6.webp"
}


interface Case{
  src : string,
  p:string
}
