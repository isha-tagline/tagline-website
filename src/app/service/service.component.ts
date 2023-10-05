import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  public button: string = 'Learn More → ';
  public title : string = 'Our Services';
  public serviceArr: Service[] = [
    { 
      h4: "Application Management and Modernisation", 
      iconUrl : "assets/image/card2.webp",
      p: "Here at Tagline, we provide the service of Application management and modernisation for the growth of your business. We update the old application with new approaches, including the latest languages, frameworks, and platforms." 
    }, 
    { 
      h4: "Software Product Engineering", 
      iconUrl : "assets/image/card3.webp",
      p: "We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products." 
    }, 
    { 
      h4: "Software outsourcing company", 
      iconUrl : "assets/image/card4.png",
      p: "Tagline Infotech is an experienced software outsourcing company that provides services for various businesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business." 
    }, 
    { 
      h4: "IT Consulting Services", 
      iconUrl : "assets/image/card5.webp",
      p: 'We are a leading IT consulting firm that provides the best IT consulting services to improve the scalability and performance of your company. Our team creates the most logical digital infrastructure to improve the efficiency of your business.' 
    }
  ]
}

interface Service {
  h4: string,
  iconUrl : string,
  p: string,
}