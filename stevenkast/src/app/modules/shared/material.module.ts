import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { NgxSimpleIconsModule, typescript, csharp, angular, git, microsoftsqlserver, mongodb, html5, css3, cplusplus, java, dotnet, redux, express, docker, azuredevops, githubactions, kubernetes, materialdesign, bootstrap } from 'ngx-simple-icons';



@NgModule({
  declarations: [],
  imports: [
    NgxSimpleIconsModule.pick({ typescript, csharp, angular, git, microsoftsqlserver, mongodb, html5, css3, cplusplus, java, dotnet, redux, express, docker, azuredevops, githubactions, kubernetes, materialdesign, bootstrap })
  ],
  exports: [
    MatToolbarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    NgxSimpleIconsModule
  ]
})
export class MaterialModule { }
