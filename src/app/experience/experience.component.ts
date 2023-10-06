import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
   public title : string = "We have the experience";
   public title_detail : string = "We have got the experience to make your dream come true, and these stats speak for themselves: we have 350+ clients worldwide in only five years, and we have worked on over 650+ projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 250K+ hours of freelancing experience."

   public expArr : ExpArr[] = [
    {
      imgPath : 'assets/image/experience1.webp',
      detail : '150+',
      p : 'Professional'
    },
    {
      imgPath : 'assets/image/experiance2.webp',
      detail : '650+',
      p : 'Completed Projects'
    },
    {
      imgPath : 'assets/image/experiance3.webp',
      detail : '250+',
      p : 'Freelance Hours'
    },
    {
      imgPath : 'assets/image/experiance4.webp',
      detail : '50+',
      p : 'Years of experience'
    }
   ]
}

interface ExpArr{
  imgPath : string,
  detail : string,
  p : string
}
