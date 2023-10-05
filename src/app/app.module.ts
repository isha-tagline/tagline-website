import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ServiceComponent } from './service/service.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TechnologyComponent } from './technology/technology.component';
import { DevelopersComponent } from './developers/developers.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { ClutchComponent } from './clutch/clutch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ServiceComponent,
    CaseStudyComponent,
    ExperienceComponent,
    AboutUsComponent,
    TechnologyComponent,
    DevelopersComponent,
    WhyChooseComponent,
    ClutchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
