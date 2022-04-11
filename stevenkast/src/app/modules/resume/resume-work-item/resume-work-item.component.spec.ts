import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWorkItemComponent } from './resume-work-item.component';

describe('ResumeWorkItemComponent', () => {
  let component: ResumeWorkItemComponent;
  let fixture: ComponentFixture<ResumeWorkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeWorkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
