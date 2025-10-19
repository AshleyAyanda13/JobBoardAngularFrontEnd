
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private apiUrl = 'http://localhost:8080/api/auth/authenticate';
  private apiUrlRegistration = 'https://localhost:6061/api/Account/register';
  private apiUrlInventory = 'http://localhost:8080/api/vacancy/allvacancies';
  private apiUrlAddUserCV="http://localhost:8080/api/resumes/upload";
   private apiUrlgetUsersCV="http://localhost:8080/api/resumes/user/";
   private apiUrlDownloadUsersCV="http://localhost:8080/api/resumes/user/download";
 
  private apiUrlGetInventoryById = 'https://localhost:6061/api/Inventory/';
  private apipostWorkExp="http://localhost:8080/api/profile/AddMyWorkExperience";
    private apiEditWorkExp="http://localhost:8080/api/profile/updateUserWorkExperience/";
  private apiDeleteData="http://localhost:8080/api/resumes/delete";
  private apiGetExperience="http://localhost:8080/api/profile/myworkExperience";
 private apiGetEducation="http://localhost:8080/api/profile/myEducation";
 private apipostEducation="http://localhost:8080/api/profile/AddMyEducation";
  private apiEditEducation="http://localhost:8080/api/profile/updateUserEducation/";
    private apiDeleteEducation="http://localhost:8080/api/profile/DeleteUsersEducation/";
        private apiDeleteExperience="http://localhost:8080/api/profile/DeleteUsersWorkExperience/";
         private apiGetLoggedInUserInformation="http://localhost:8080/api/profile/LoggedInUser";
 private apiGetEmployersVacancies="http://localhost:8080/api/vacancy/myVacancies";
 private apiPostEmployersVacancy="http://localhost:8080/api/vacancy/UploadVacancy";
private apiGetVacancyById="http://localhost:8080/api/vacancy/VacancyDetails/";
private apiDeleteVacancy="http://localhost:8080/api/vacancy/DeleteAVacancy/";

private apiUpdateJobDetails="http://localhost:8080/api/vacancy/UpdateVacancy/";

private apiGetAllVacancies="http://localhost:8080/api/vacancy/allPostedVacancies";
private apiGetMyVacancyApplications="http://localhost:8080/api/application/application/";


private apiPostApplicationForVacancy="http://localhost:8080/api/application/applytoJob/";


private apiGetJobSeekersApplications="http://localhost:8080/api/application/user/";


private apiGetApplicantsCV="http://localhost:8080/api/resumes/resume/";


private apiGetApplicantsCVDetails="http://localhost:8080/api/resumes/resumedata/";

private apiPostSearchQuery="http://localhost:8080/api/vacancy/SearchForVacancy";



  constructor(private http: HttpClient) { }

  postData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }

  
  postRegistrationData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlRegistration, payload);
  }
   DownloadCv(): Observable<Blob> {
  return this.http.get('http://localhost:8080/api/resumes/download', {
    responseType: 'blob' 
  });
}

  
  getInventoryData(): Observable<any> {
    return this.http.get<any>(this.apiUrlInventory);
  }
  getEmployersVacancies(): Observable<any> {
    return this.http.get<any>(this.apiGetEmployersVacancies);
  }


   getLoggedInUser(): Observable<any> {
    return this.http.get<any>(this.apiGetLoggedInUserInformation);
  }
   getExperienceData(): Observable<any> {
    return this.http.get<any>(this.apiGetExperience);
  }
   getEducationData(): Observable<any> {
    return this.http.get<any>(this.apiGetEducation);
  }
  getAllVacancies(): Observable<any> {
    return this.http.get<any>(this.apiGetAllVacancies);
  }
   getUsersCV(UserID:any): Observable<any> {
    return this.http.get<any>(this.apiUrlgetUsersCV+UserID);
  }
getApplicantsCV(vacancyId: any): Observable<Blob> {
  return this.http.get(`${this.apiGetApplicantsCV}${vacancyId}`, {
    responseType: 'blob'
  });
}

 getApplicantCvDetails(Id:any): Observable<any> {
    return this.http.get<any>(this.apiGetApplicantsCVDetails+Id);
  }
   getVacancyById(id:any): Observable<any> {
    return this.http.get<any>(this.apiGetVacancyById+id);
  }
   getVacancyApplications(id:any): Observable<any> {
    return this.http.get<any>(this.apiGetMyVacancyApplications+id);
  }
postUserCV(payload: FormData): Observable<any> {
  return this.http.post<any>(this.apiUrlAddUserCV, payload); // URL must match your backend @PostMapping
}
postEmployersVacancy(payload: FormData): Observable<any> {
  return this.http.post<any>(this.apiPostEmployersVacancy, payload); // URL must match your backend @PostMapping
}
   
  getInventoryDatawithId(Id:number): Observable<any> {
    return this.http.get<any>(this.apiUrlGetInventoryById+Id);
  }
   getJobSeekersApplications(UserId:number): Observable<any> {
    return this.http.get<any>(this.apiGetJobSeekersApplications+UserId);
  }
  postEditExp(Id:number,payload: any): Observable<any> {
    return this.http.put<any>(this.apiEditWorkExp+Id, payload);
  }
  postApplicationforvacancy(Id:number,payload: any): Observable<any> {
    return this.http.post<any>(this.apiPostApplicationForVacancy+Id, payload);
  }
  
  postWorkExperience(payload: any): Observable<any> {
    return this.http.post<any>(this.apipostWorkExp, payload);
  }
  postEducation(payload: any): Observable<any> {
    return this.http.post<any>(this.apipostEducation, payload);
  }
  EditEducation(Id:number,payload: any): Observable<any> {
    return this.http.put<any>(this.apiEditEducation+Id, payload);
  }
  EditPostedVacancy(Id:number,payload: any): Observable<any> {
    return this.http.put<any>(this.apiUpdateJobDetails+Id, payload);
  }
  
  DeleteEducation(Id:number): Observable<any> {
    return this.http.delete<any>(this.apiDeleteEducation+Id);
  }
   DeleteExp(Id:number): Observable<any> {
    return this.http.delete<any>(this.apiDeleteExperience+Id);
  }
  DeleteVacancy(Id:any): Observable<any> {
    return this.http.delete<any>(this.apiDeleteVacancy+Id);
  }
DeleteCv(): Observable<any> {
    return this.http.delete<any>(this.apiDeleteData);
  }

  postSearchQuery(payload: any): Observable<any> {
    return this.http.post<any>(this.apiPostSearchQuery, payload);
  }
  }





