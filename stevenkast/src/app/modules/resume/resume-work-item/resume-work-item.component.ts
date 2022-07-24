import { Component, Input, OnInit } from '@angular/core';
import { WorkPlace } from '../models';

@Component({
  selector: 'app-resume-work-item',
  templateUrl: './resume-work-item.component.html',
  styleUrls: ['./resume-work-item.component.scss']
})
export class ResumeWorkItemComponent implements OnInit {


  @Input() workItem: WorkPlace = {} as WorkPlace;

  constructor() { }

  ngOnInit(): void {
  }

}
