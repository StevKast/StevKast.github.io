import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../shared';
import { ResumeWorkItemComponent } from './resume-work-item/resume-work-item.component';
import { ResumeTechItemComponent } from './resume-tech-item/resume-tech-item.component';
import { ResumeSchoolComponent } from './resume-school/resume-school.component';
import { ResumeContactComponent } from './resume-contact/resume-contact.component';



@NgModule({
  declarations: [
    ResumeComponent,
    ResumeWorkItemComponent,
    ResumeTechItemComponent,
    ResumeSchoolComponent,
    ResumeContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ResumeModule { }
