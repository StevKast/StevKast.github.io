import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../shared';
import { ResumeWorkItemComponent } from './resume-work-item/resume-work-item.component';
import { ResumeTechItemComponent } from './resume-tech-item/resume-tech-item.component';



@NgModule({
  declarations: [
    ResumeComponent,
    ResumeWorkItemComponent,
    ResumeTechItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ResumeModule { }
