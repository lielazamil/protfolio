import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-whoiam',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbCollapseModule,NavComponent],
  templateUrl: './whoiam.component.html',
  styleUrls: ['./whoiam.component.css'],
})
export class WhoiamComponent {}
