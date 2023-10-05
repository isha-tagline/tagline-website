import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public imagePath : string = 'assets/image/tagline-logo.svg'
  public pageArr : string[] = ['Case Study','About us','Hire Developers','Technology','Industry','Blogs'];
  public button : string = "GET QUOTE";
}
