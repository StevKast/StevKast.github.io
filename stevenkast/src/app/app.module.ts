import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ResumeModule } from './modules/resume/resume.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { PrintingModule } from './modules/printing/printing.module';
import { ServerAccessModule } from './modules/server-access/server-access.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    ResumeModule,
    AppRoutingModule,
    ProjectsModule,
    PrintingModule,
    ServerAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
