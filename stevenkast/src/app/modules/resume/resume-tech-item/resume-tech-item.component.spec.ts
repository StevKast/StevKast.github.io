import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTechItemComponent } from './resume-tech-item.component';

describe('ResumeTechItemComponent', () => {
  let component: ResumeTechItemComponent;
  let fixture: ComponentFixture<ResumeTechItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTechItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTechItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
