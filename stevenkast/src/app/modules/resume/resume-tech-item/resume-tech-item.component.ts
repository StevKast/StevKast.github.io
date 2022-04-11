import { Component, OnInit } from '@angular/core';
// import { angular, azuredevops, bootstrap, cplusplus, csharp, css3, docker, dotnet, express, git, githubactions, html5, IconName, java, kubernetes, materialdesign, mongodb, mysql, redux, typescript } from 'ngx-simple-icons';
import { IconNameEnum } from 'ngx-simple-icons';

@Component({
  selector: 'app-resume-tech-item',
  templateUrl: './resume-tech-item.component.html',
  styleUrls: ['./resume-tech-item.component.scss']
})
export class ResumeTechItemComponent implements OnInit {

  iconNames = IconNameEnum;

  languages = [
    { name: 'C#', icon: this.iconNames.csharp },
    { name: 'Typescript', icon: this.iconNames.typescript },
    { name: 'Git', icon: this.iconNames.git },
    { name: 'Microsoft SQL Server', icon: this.iconNames.microsoftsqlserver },
    { name: 'MongoDB', icon: this.iconNames.mongodb },
    { name: 'HTML', icon: this.iconNames.html5 },
    { name: 'CSS', icon: this.iconNames.css3 },
    { name: 'C++', icon: this.iconNames.cplusplus },
    { name: 'Java', icon: this.iconNames.java }
  ];

  tech = [
    { name: '.NET', icon: this.iconNames.dotnet },
    { name: 'Angular', icon: this.iconNames.angular },
    { name: 'RxJS / NgRx', icon: this.iconNames.redux },
    { name: 'Express.js', icon: this.iconNames.express },
    { name: 'Docker', icon: this.iconNames.docker },
    { name: 'Azure DevOps', icon: this.iconNames.azuredevops },
    { name: 'Github Actions', icon: this.iconNames.githubactions },
    { name: 'K8s / K3s', icon: this.iconNames.kubernetes },
    { name: 'Material Design', icon: this.iconNames.materialdesign },
    { name: 'Bootstrap', icon: this.iconNames.bootstrap }
  ];

  principles = [
    'Agile',
    'Scrum',
    'LEAN',
    'REST',
    'Microservices',
    'Test Driven Development',
    ' CI/CD'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
