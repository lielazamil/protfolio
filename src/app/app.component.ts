import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import {routes} from './app.routes' 
import { RouterModule, Routes } from '@angular/router';
import { UserProtfoComponent } from './user-protfo/user-protfo.component';
import { NavComponent } from './LailaProtfolio/nav/nav.component';
import { FooterComponent } from './LailaProtfolio/footer/footer.component';
import { SkillsComponent } from './LailaProtfolio/skills/skills.component';
import { ProjectsComponent } from './LailaProtfolio/projects/projects.component';
import { AboutComponent } from './LailaProtfolio/about/about.component';
import { ContactComponent } from './LailaProtfolio/contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,UserProtfoComponent,NavComponent,FooterComponent,SkillsComponent,ProjectsComponent,AboutComponent,ContactComponent,RouterModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = 'final';
}
