import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSchoolComponent } from './resume-school.component';

describe('ResumeSchoolComponent', () => {
  let component: ResumeSchoolComponent;
  let fixture: ComponentFixture<ResumeSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
