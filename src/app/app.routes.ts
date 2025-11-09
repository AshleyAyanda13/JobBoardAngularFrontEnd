import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PostjobPageComponent } from './pages/employer/postjob-page/postjob-page.component';
import { PostedJobsPageComponent } from './pages/employer/posted-jobs-page/posted-jobs-page.component';
import { EditjobComponent } from './employer/jobs/editjob/editjob.component';
import { ApplicantsComponent } from './employer/jobs/applicants/applicants.component';
import { JobSeekerAvailableVacanciesPageComponent } from './pages/job-seeker-available-vacancies-page/job-seeker-available-vacancies-page.component';
import { VacancyDetailsforapplicationComponent } from './components/vacancy-detailsforapplication/vacancy-detailsforapplication.component';
 import { ApplicationsPageComponent } from './pages/applications-page/applications-page.component';
import { SearchresultsavailablevacanciesComponent } from './components/searchresultsavailablevacancies/searchresultsavailablevacancies.component';
import { SearchresultsavailablevacanciesPageComponent } from './pages/searchresultsavailablevacancies-page/searchresultsavailablevacancies-page.component';
import { EmployerLoginPageComponent } from './pages/employer/employer-login-page/employer-login-page.component';
import { roleGuard } from './auth/role.guard';
import { RegisterPageComponent } from './pages/employer/register-page/register-page.component';
import { JobSeekerRegistrationPageComponent } from './pages/job-seeker-registration-page/job-seeker-registration-page.component';
import { RecruiterProfilePageComponent } from './pages/employer/recruiter-profile-page/recruiter-profile-page.component';
import { UnauthorisedPageComponent } from './pages/unauthorised-page/unauthorised-page.component';
 

export const routes: Routes = [

    { path: '', component: LoginPageComponent }, 
  { path: 'login', component: LoginPageComponent },

  { path: 'profile', component: ProfilePageComponent, canActivate: [roleGuard],data: { roles: ['JOBSEEKER','RECRUITER'] } },
   { path: 'postjob', component: PostjobPageComponent, canActivate: [roleGuard],data: { roles: ['RECRUITER'] } },
      { path: 'postedjobs', component: PostedJobsPageComponent, canActivate: [roleGuard],data: { roles: ['RECRUITER'] } },   
  { path: 'editjob/:id', component: EditjobComponent, canActivate: [roleGuard],data: { roles: ['RECRUITER'] } },
  { path: 'application/:id', component: ApplicantsComponent, canActivate: [roleGuard],data: { roles: ['RECRUITER'] } },
{ path: 'availablevacancies', component: JobSeekerAvailableVacanciesPageComponent, canActivate: [roleGuard],data: { roles: ['JOBSEEKER'] } },
  { path: 'vacancydetailsforapplication/:id', component: VacancyDetailsforapplicationComponent, canActivate: [roleGuard],data: { roles: ['JOBSEEKER'] } },
   { path: 'jobseekersapplications', component: ApplicationsPageComponent, canActivate: [roleGuard],data: { roles: ['JOBSEEKER'] } },

   { path: 'jobseekeravailablesearchedvacancies', component: SearchresultsavailablevacanciesComponent, canActivate: [roleGuard],data: { roles: ['JOBSEEKER'] } },
   { path: 'unauthorised', component: UnauthorisedPageComponent },
   
   { path: 'jobseekerregistration', component: JobSeekerRegistrationPageComponent },
      { path: 'recruiterprofile', component: RecruiterProfilePageComponent, canActivate: [roleGuard],data: { roles: ['RECRUITER'] } },
   
{ path: 'searchresults', component: SearchresultsavailablevacanciesPageComponent, canActivate: [roleGuard],data: { roles: ['JOBSEEKER'] }
 ,
 },
   { path: 'recruiterlogin', component: EmployerLoginPageComponent },
      { path: 'recruiterregister', component: RegisterPageComponent },
  { path: '**', redirectTo: 'unauthorised' } 
];
