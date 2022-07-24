import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  workItems = [
    {
      name: 'Progressive Insurance',
      img: '../../../assets/PGR_Electric_Blue_72dpi.png',
      role: 'IT Apps Programmer',
      date: 'August 2020 - Current',
      location: 'Cleveland, Ohio',
      bullets: [
        'Migrated legacy payments system to new full-stack Angular and .NET Core apps on a scrum team',
        'Implemented search functionality that reduced wrong payments in our app that processes $35b/yr',
        'Improved accessibility through feedback from user usability studies',
        'Participated in on-call support rotation for a business-critical application'
      ]
    },
    {
      name: 'Nationwide Financial',
      img: '../../../assets/NWLogo_BlueSquare-01.svg',
      role: 'Application Development Intern',
      date: 'May 2019 - August 2019',
      location: 'Columbus, Ohio',
      bullets: [
        'Developed a full-stack application that reduced a daily task from 1 - 2 hours to 5 minutes',
        'Created deployment pipelines using Concourse to automate builds, testing, and execution',
        'Technologies Used: Java, Java Spring, SQL, Angular (and AngularJS), Concourse Pipelines, and Git'
      ]
    },
    {
      name: 'Miami University',
      img: '../../../assets/miami-logo.png',
      role: 'Teaching Assistant',
      date: 'August 2018 - December 2018',
      location: 'Oxford, Ohio',
      bullets: [
        'Courses: User Interface/User Experience, Ethics in Computing',
        'Graded tests and assignments and held help sessions to facilitate learning'
      ]
    },
    {
      name: 'Miami University',
      img: '../../../assets/miami-logo.png',
      role: 'Student Orientation Undergraduate Leader',
      date: 'May 2017 - January 2018',
      location: 'Oxford, Ohio',
      bullets: [
        'Collaborated with 23 other leaders on a daily basis, program served over 8,500 students and families',
        'Facilitated multiple small group discussions of ~18 students about common first year problems',
        'Demonstrated leadership ability as a role model for incoming students'
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
