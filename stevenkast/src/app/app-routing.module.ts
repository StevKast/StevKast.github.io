import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PrintingComponent } from './modules/printing/printing.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ResumeComponent } from './modules/resume/resume.component';
import { ServerAccessComponent } from './modules/server-access/server-access.component';
import { SoonComponent } from './modules/shared/components/soon/soon.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', redirectTo: '/soon' },
  { path: '3dprints', component: PrintingComponent },
  { path: '3dprinter', redirectTo: '/3dprints' },
  { path: 'server', redirectTo: '/soon' },
  { path: 'soon', component: SoonComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
