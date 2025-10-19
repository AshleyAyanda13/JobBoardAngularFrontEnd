import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PostjobPageComponent } from './pages/employer/postjob-page/postjob-page.component';
import { PostedJobsPageComponent } from './pages/employer/posted-jobs-page/posted-jobs-page.component';
import { EditjobComponent } from './employer/jobs/editjob/editjob.component';
import { ApplicantsComponent } from './employer/jobs/applicants/applicants.component';
import { JobSeekerAvailableVacanciesPageComponent } from './pages/job-seeker-available-vacancies-page/job-seeker-available-vacancies-page.component';
import { VacancyDetailsforapplicationComponent } from './components/vacancy-detailsforapplication/vacancy-detailsforapplication.component';
import { ApplicantsPageComponent } from './pages/employer/applicants-page/applicants-page.component';
import { ApplicationsPageComponent } from './pages/applications-page/applications-page.component';
import { SearchresultsavailablevacanciesComponent } from './components/searchresultsavailablevacancies/searchresultsavailablevacancies.component';
import { SearchresultsavailablevacanciesPageComponent } from './pages/searchresultsavailablevacancies-page/searchresultsavailablevacancies-page.component';



export const routes: Routes = [

    { path: '', component: LoginPageComponent }, 
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'profile', component: ProfilePageComponent },
   { path: 'postjob', component: PostjobPageComponent },
      { path: 'postedjobs', component: PostedJobsPageComponent },   
  { path: 'editjob/:id', component: EditjobComponent },
  { path: 'application/:id', component: ApplicantsComponent },
{ path: 'availablevacancies', component: JobSeekerAvailableVacanciesPageComponent },
  { path: 'vacancydetailsforapplication/:id', component: VacancyDetailsforapplicationComponent },
   { path: 'jobseekersapplications', component: ApplicationsPageComponent },

   { path: 'jobseekeravailablesearchedvacancies', component: SearchresultsavailablevacanciesComponent },
   
{ path: 'searchresults', component: SearchresultsavailablevacanciesPageComponent },
   
   
  { path: '**', redirectTo: '' } // 👈 Redirect unknown routes to login
];
