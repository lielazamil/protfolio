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
      title: 'omnifood project',
      description: 'Omnifood is a responsive website for a meal delivery service. It features a clean design, meal plans, user reviews, and easy sign-up options. Built with HTML and CSS it ensures smooth navigation and mobile-friendly viewing.',
      imageUrl: 'assets/img/pro1.png',
      liveDemoUrl: 'https://live-demo-1.com'
    },
    {
      title: 'Project 2',
      description: 'A series of small, responsive websites built with HTML, CSS, Bootstrap, JavaScript, and APIs. These projects feature dynamic elements like interactive forms, real-time data fetching, smooth scrolling, and responsive layouts. Each site ensures a seamless experience across devices, integrating API calls for functionalities like weather updates, product information, or user feedback.',
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
