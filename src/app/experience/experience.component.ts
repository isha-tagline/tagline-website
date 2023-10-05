import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
   public title : string = "We have the experience";
   public title_detail : string = "We have got the experience to make your dream come true, and these stats speak for themselves: we have 350+ clients worldwide in only five years, and we have worked on over 650+ projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 250K+ hours of freelancing experience."

   public imgPath1 : string = 'assets/image/experience1.webp';
   public imgPath2 : string = 'assets/image/experiance2.webp';
   public imgPath3 : string = 'assets/image/experiance3.webp';
   public imgPath4 : string = 'assets/image/experiance4.webp';

   public expArr : ExpArr[] = [
    {
      detail : '150+',
      p : 'Professional'
    },
    {
      detail : '650+',
      p : 'Completed Projects'
    },
    {
      detail : '250+',
      p : 'Freelance Hours'
    },
    {
      detail : '50+',
      p : 'Years of experience'
    }
   ]
}

interface ExpArr{
  detail : string,
  p : string
}
