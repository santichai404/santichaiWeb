import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ResumeComponent } from './page/resume/resume.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"/home",
    pathMatch: 'full'
  }
  ,
  {
    path: "home",
    component: HomeComponent,
  }
  ,
  {
    path: "resume",
    component: ResumeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
