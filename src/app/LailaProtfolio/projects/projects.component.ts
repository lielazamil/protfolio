import { Component } from '@angular/core';
import { } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [],
})
export class ProjectsComponent {
  currentProjectIndex = 0;
  projects = [
    {
      title: 'Project 1',
      description: 'This is the description for project 1.',
      imageUrl: 'assets/img/pro1.png',
      liveDemoUrl: 'https://live-demo-1.com'
    },
    {
      title: 'Project 2',
      description: 'This is the description for project 2.',
      imageUrl: 'assets/img/pro2.png',
      liveDemoUrl: 'https://live-demo-2.com'
    }
  ];
  get currentProject() {
    console.log(this.projects[this.currentProjectIndex].imageUrl);
    return this.projects[this.currentProjectIndex];
  }

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

}
