import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { CaseStudyModalComponent } from './case-study-modal/case-study-modal.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  // { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'work/:id', component: CaseStudyModalComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', redirectTo: '/about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }