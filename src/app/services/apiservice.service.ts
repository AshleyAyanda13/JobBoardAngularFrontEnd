
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

    private apiGetLoggedInUserInformationDetails="http://localhost:8080/api/auth/me";
 
  
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
    return this.http.post<any>(this.apiUrl, payload,{ withCredentials: true }
);
  }

  
  postRegistrationData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlRegistration, payload);
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
    return this.http.get<any>(this.apiGetEmployersVacancies);
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


