import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProtfoComponent } from './user-protfo.component';

describe('UserProtfoComponent', () => {
  let component: UserProtfoComponent;
  let fixture: ComponentFixture<UserProtfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProtfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProtfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
