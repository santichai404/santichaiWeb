import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './content/aboutme/aboutme.component';
import { SkillComponent } from './content/skill/skill.component';
import { ExpComponent } from './content/exp/exp.component';
import { HomeComponent } from './page/home/home.component';
import { ResumeComponent } from './page/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AboutmeComponent,
    SkillComponent,
    ExpComponent,
    HomeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
