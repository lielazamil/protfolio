import {RouterModule, Routes } from '@angular/router';

import { WhoiamComponent } from './LailaProtfolio/whoiam/whoiam.component';
import { UserProtfoComponent } from './user-protfo/user-protfo.component';
import { NavComponent } from './LailaProtfolio/nav/nav.component';
import { FooterComponent } from './LailaProtfolio/footer/footer.component';
import { SkillsComponent } from './LailaProtfolio/skills/skills.component';
import { ProjectsComponent } from './LailaProtfolio/projects/projects.component';
import { AboutComponent } from './LailaProtfolio/about/about.component';
import { ContactComponent } from './LailaProtfolio/contact/contact.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {path:'',component:WhoiamComponent},
  {path:'whoiam',component:WhoiamComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'User-protfo',component:UserProtfoComponent},
  // {path:'User-protfo',component:UserProtfoComponent},
  {path:'form',component:FormComponent},
];
export const AppRoutingModule=
RouterModule.forRoot(routes);