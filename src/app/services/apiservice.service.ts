
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 private apiUrl = 'https://job-board-backend-latest-4786.onrender.com/api/auth/authenticate';

  private apiUrlRegistration = 'https://job-board-backend-latest-4786.onrender.com/api/auth/registerrecruiter';
  private apiUrlJobSeekerRegistration = 'https://job-board-backend-latest-4786.onrender.com/api/auth/register';
  private apiUrlInventory = 'https://job-board-backend-latest-4786.onrender.com/api/vacancy/allvacancies';
  private apiUrlAddUserCV = 'https://job-board-backend-latest-4786.onrender.com/api/resumes/upload';
  private apiUrlgetUsersCV = 'https://job-board-backend-latest-4786.onrender.com/api/resumes/user/';
  private apiUrlDownloadUsersCV = 'https://job-board-backend-latest-4786.onrender.com/api/resumes/user/download';

  private apiGetLoggedInUserInformationDetails = 'https://job-board-backend-latest-4786.onrender.com/api/auth/me';
  private apiUserLogout = 'https://job-board-backend-latest-4786.onrender.com/api/auth/logout';

  private apipostWorkExp = 'https://job-board-backend-latest-4786.onrender.com/api/profile/AddMyWorkExperience';
  private apiEditWorkExp = 'https://job-board-backend-latest-4786.onrender.com/api/profile/updateUserWorkExperience/';
  private apiDeleteData = 'https://job-board-backend-latest-4786.onrender.com/api/resumes/delete';
  private apiGetExperience = 'https://job-board-backend-latest-4786.onrender.com/api/profile/myworkExperience';
  private apiGetEducation = 'https://job-board-backend-latest-4786.onrender.com/api/profile/myEducation';
  private apipostEducation = 'https://job-board-backend-latest-4786.onrender.com/api/profile/AddMyEducation';
  private apiEditEducation = 'https://job-board-backend-latest-4786.onrender.com/api/profile/updateUserEducation/';
  private apiDeleteEducation = 'https://job-board-backend-latest-4786.onrender.com/api/profile/DeleteUsersEducation/';
  private apiDeleteExperience = 'https://job-board-backend-latest-4786.onrender.com/api/profile/DeleteUsersWorkExperience/';
  private apiGetLoggedInUserInformation = 'https://job-board-backend-latest-4786.onrender.com/api/profile/LoggedInUser';
  private apiGetEmployersVacancies = 'https://job-board-backend-latest-4786.onrender.com/api/vacancy/myVacancies';
  private apiPostEmployersVacancy = 'https://job-board-backend-latest-4786.onrender.com/api/vacancy/UploadVacancy';
  private apiGetVacancyById = 'https://job-board-backend-latest-4786.onrender.com/api/vacancy/VacancyDetails/';
  private apiDeleteVacancy = 'https://job-board-backend-latest-4786.onrender.com/api/vacancy/DeleteAVacancy/';
  private apiUpdateJobDetails = 'https://job-board-backend-latest-4786.onrender.com/api/vacancy/UpdateVacancy/';
  private apiGetAllVacancies = 'https://job-board-backend-latest-4786.onrender.com/api/vacancy/allPostedVacancies';
  private apiGetMyVacancyApplications = 'https://job-board-backend-latest-4786.onrender.com/api/application/application/';
  private apiPostApplicationForVacancy = 'https://job-board-backend-latest-4786.onrender.com/api/application/applytoJob/';
  private apiGetJobSeekersApplications = 'https://job-board-backend-latest-4786.onrender.com/api/application/user/';
  private apiGetApplicantsCV = 'https://job-board-backend-latest-4786.onrender.com/api/resumes/resume/';
  private apiGetApplicantsCVDetails = 'https://job-board-backend-latest-4786.onrender.com/api/resumes/resumedata/';
  private apiPostSearchQuery = 'https://job-board-backend-latest-4786.onrender.com/api/vacancy/SearchForVacancy';

  constructor(private http: HttpClient) { }



  postData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload,{ withCredentials: true }
);
  }
  postJobSekeerRegistrationData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlJobSeekerRegistration, payload,{ withCredentials: true });
  }
  
  
  postRecruiterRegistrationData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlRegistration, payload,{ withCredentials: true });
  }
   DownloadCv(): Observable<Blob> {
  return this.http.get('http://localhost:8080/api/resumes/download', {
    responseType: 'blob' ,withCredentials: true
  });
}

  
  getInventoryData(): Observable<any> {
    return this.http.get<any>(this.apiUrlInventory);
  }
  getEmployersVacancies(): Observable<any> {
    return this.http.get<any>(this.apiGetEmployersVacancies,{ withCredentials: true });
  }


   getLoggedInUser(): Observable<any> {
    return this.http.get<any>(this.apiGetLoggedInUserInformation,{ withCredentials: true });
  }
   getLoggedInUserDetails(): Observable<any> {
    return this.http.get<any>(this.apiGetLoggedInUserInformationDetails,{ withCredentials: true });
  }
   getExperienceData(): Observable<any> {
    return this.http.get<any>(this.apiGetExperience,{ withCredentials: true });
  }
   getEducationData(): Observable<any> {
    return this.http.get<any>(this.apiGetEducation,{ withCredentials: true });
  }
  getAllVacancies(): Observable<any> {
    return this.http.get<any>(this.apiGetAllVacancies,{ withCredentials: true });
  }
   getUsersCV(UserID:any): Observable<any> {
    return this.http.get<any>(this.apiUrlgetUsersCV+UserID,{ withCredentials: true });
  }
getApplicantsCV(vacancyId: any): Observable<Blob> {
  return this.http.get(`${this.apiGetApplicantsCV}${vacancyId}`, {
    responseType: 'blob'
  });
}

 getApplicantCvDetails(Id:any): Observable<any> {
    return this.http.get<any>(this.apiGetApplicantsCVDetails+Id,{ withCredentials: true });
  }
   getVacancyById(id:any): Observable<any> {
    return this.http.get<any>(this.apiGetVacancyById+id,{ withCredentials: true });
  }
   getVacancyApplications(id:any): Observable<any> {
    return this.http.get<any>(this.apiGetMyVacancyApplications+id,{ withCredentials: true });
  }
postUserCV(payload: FormData): Observable<any> {
  return this.http.post<any>(this.apiUrlAddUserCV, payload,{ withCredentials: true });  
}
postEmployersVacancy(payload: FormData): Observable<any> {
  return this.http.post<any>(this.apiPostEmployersVacancy, payload,{ withCredentials: true });  
 }
   

   getJobSeekersApplications(UserId:number): Observable<any> {
    return this.http.get<any>(this.apiGetJobSeekersApplications+UserId,{ withCredentials: true });
  }
  postEditExp(Id:number,payload: any): Observable<any> {
    return this.http.put<any>(this.apiEditWorkExp+Id, payload,{ withCredentials: true });
  }
  postApplicationforvacancy(Id:number,payload: any): Observable<any> {
    return this.http.post<any>(this.apiPostApplicationForVacancy+Id, payload,{ withCredentials: true });
  }
  postUserLogout(): Observable<any> {
    return this.http.post<any>(this.apiUserLogout,{ withCredentials: true });
  }
  
  postWorkExperience(payload: any): Observable<any> {
    return this.http.post<any>(this.apipostWorkExp, payload,{ withCredentials: true });
  }
  postEducation(payload: any): Observable<any> {
    return this.http.post<any>(this.apipostEducation, payload,{ withCredentials: true });
  }
  EditEducation(Id:number,payload: any): Observable<any> {
    return this.http.put<any>(this.apiEditEducation+Id, payload,{ withCredentials: true });
  }
  EditPostedVacancy(Id:number,payload: any): Observable<any> {
    return this.http.put<any>(this.apiUpdateJobDetails+Id, payload,{ withCredentials: true });
  }
  
  DeleteEducation(Id:number): Observable<any> {
    return this.http.delete<any>(this.apiDeleteEducation+Id,{ withCredentials: true });
  }
   DeleteExp(Id:number): Observable<any> {
    return this.http.delete<any>(this.apiDeleteExperience+Id,{ withCredentials: true });
  }
  DeleteVacancy(Id:any): Observable<any> {
    return this.http.delete<any>(this.apiDeleteVacancy+Id,{ withCredentials: true });
  }
DeleteCv(): Observable<any> {
    return this.http.delete<any>(this.apiDeleteData,{ withCredentials: true });
  }

  postSearchQuery(payload: any): Observable<any> {
    return this.http.post<any>(this.apiPostSearchQuery, payload,{ withCredentials: true });
  }
  }


