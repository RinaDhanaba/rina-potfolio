import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { CaseStudyModalComponent } from './case-study-modal/case-study-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkComponent,
    ServicesComponent,
    ResumeComponent,
    CaseStudyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
