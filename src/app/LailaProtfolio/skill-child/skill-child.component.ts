import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-child',
  standalone: true,
  templateUrl: './skill-child.component.html',
  styleUrls: ['./skill-child.component.css']
})
export class SkillChildComponent {
  @Input() skillitem: any; 
}

