import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-protfo',
  standalone: true,
  imports: [NgbCollapseModule, FormComponent,RouterModule],
  templateUrl: './user-protfo.component.html',
  styleUrl: './user-protfo.component.css',
})
export class UserProtfoComponent {
  isCollapsed = true;
  // logoName: string = '';
  username: string = '';
  majorname: string = '';
  Specialize: string = '';
  faculty: string = '';
  email: string = '';
  phone: string = '';
  graduation: string = '';
  resume: string = '';
  img: string = '';
  linkedin: string = '';
  facebook: string = '';
  twitter: string = '';
  descripe: string = '';
  // Work skills
  titleWorkSkill1: string = '';
  titleWorkSkill2: string = '';
  titleWorkSkill3: string = '';
  titleWorkSkill4: string = '';
  titleWorkSkill5: string = '';

  img1: string = '';
  img2: string = '';
  img3: string = '';
  img4: string = '';
  img5: string = '';

  // Projects
  projectImg1: string = '';
  projectTitle1: string = '';
  projectTool1: string = '';
  projectImg2: string = '';
  projectTitle2: string = '';
  projectImg3: string = '';
  projectTitle3: string = '';
  constructor(private route: ActivatedRoute) {
    console.log(this.img);
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'] || 'Default Username';
      this.majorname = params['majorname'] || 'Default Majorname';
      this.Specialize = params['Specialize'] || 'Default Specialize';
      this.faculty = params['faculty'] || 'Default faculty';

      this.email = params['email'] || 'Default Email';
      this.phone = params['phone'] || 'Default Phone';
      this.resume = params['resume'] || '';
      this.descripe = params['descripe'] || '';
      this.img = params['img'] || '';
      this.linkedin = params['linkedin'] || '';
      this.facebook = params['facebook'] || '';
      this.twitter = params['twitter'] || '';
      // this.instagram = params['instagram'] || '';

      // Work skills
      this.titleWorkSkill1 = params['titleWorkSkill1'] || '';
      this.titleWorkSkill2 = params['titleWorkSkill2'] || '';
      this.titleWorkSkill3 = params['titleWorkSkill3'] || '';
      this.titleWorkSkill4 = params['titleWorkSkill4'] || '';
      this.titleWorkSkill5 = params['titleWorkSkill5'] || '';
      this.img1 = params['img1'] || '';
      this.img2 = params['img2'] || '';
      this.img3 = params['img3'] || '';
      this.img4 = params['img4'] || '';
      this.img5 = params['img5'] || '';
      // Projects
      this.projectImg1 = params['projectImg1'] || '';
      this.projectTitle1 = params['projectTitle1'] || '';
      this.projectImg2 = params['projectImg2'] || '';
      this.projectTitle2 = params['projectTitle2'] || '';
      this.projectImg3 = params['projectImg3'] || '';
      this.projectTitle3 = params['projectTitle3'] || '';
    });
  }
}
