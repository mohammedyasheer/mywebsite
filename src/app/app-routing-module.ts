import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ResumeComponent } from "./resume/resume.component";
import { ShowcaseComponent } from "./showcase/showcase.component";
import { SkillsComponent } from "./skills/skills.component";


const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path:'home', component: ShowcaseComponent },
  { path:'about', component: AboutComponent },
  { path:'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}