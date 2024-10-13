import { SkillChildComponent } from '../skill-child/skill-child.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillChildComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: any = [
    {
      id: '1',
      title: 'HTML',
      img: 'assets/img/html.png',
    },
    {
      id: 2,
      title: 'CSS',
      img: 'assets/img/css.png',
    },
    {
      id: 3,
      title: 'JavaScript',
      img: 'assets/img/js.png',
    },
    {
      id: 4,
      title: 'Bootstrap',
      img: 'assets/img/boot.png',
    },
    {
      id: 5,
      title: 'Angular',
      img: 'assets/img/angular.png',
    },
    {
      id: 6,
      title: 'TypeScript',
      img: 'assets/img/type.png',
    },
    {
      id: 7,
      title: 'React',
      img: 'assets/img/react.png',
    },
    {
      id: 8,
      title: 'Data Structures',
      img: 'assets/img/data.png',
    },
    {
      id: 9,
      title: 'Java',
      img: 'assets/img/java.png',
    },
    {
      id: 10,
      title: 'C++',
      img: 'assets/img/c++.png',
    },
    {
      id: 11,
      title: 'Git',
      img: 'assets/img/git.png',
    },
  ];
  call() {
    this.skills.forEach((skill: any) => {
      console.log(skill.img);
    });
  }
}
