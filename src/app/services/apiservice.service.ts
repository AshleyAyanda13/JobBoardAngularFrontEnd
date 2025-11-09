import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private baseUrl = 'https://job-board-backend-latest-4786.onrender.com/api';

  private apiUrl = `${this.baseUrl}/auth/authenticate`;
  private apiUrlRegistration = `${this.baseUrl}/auth/registerrecruiter`;
  private apiUrlJobSeekerRegistration = `${this.baseUrl}/auth/register`;
  private apiUrlInventory = `${this.baseUrl}/vacancy/allvacancies`;
  private apiUrlAddUserCV = `${this.baseUrl}/resumes/upload`;
  private apiUrlgetUsersCV = `${this.baseUrl}/resumes/user/`;
  private apiUrlDownloadUsersCV = `${this.baseUrl}/resumes/user/download`;
  private apiGetLoggedInUserInformationDetails = `${this.baseUrl}/auth/me`;
  private apiUserLogout = `${this.baseUrl}/auth/logout`;
  private apipostWorkExp = `${this.baseUrl}/profile/AddMyWorkExperience`;
  private apiEditWorkExp = `${this.baseUrl}/profile/updateUserWorkExperience/`;
  private apiDeleteData = `${this.baseUrl}/resumes/delete`;
  private apiGetExperience = `${this.baseUrl}/profile/myworkExperience`;
  private apiGetEducation = `${this.baseUrl}/profile/myEducation`;
  private apipostEducation = `${this.baseUrl}/profile/AddMyEducation`;
  private apiEditEducation = `${this.baseUrl}/profile/updateUserEducation/`;
  private apiDeleteEducation = `${this.baseUrl}/profile/DeleteUsersEducation/`;
  private apiDeleteExperience = `${this.baseUrl}/profile/DeleteUsersWorkExperience/`;
  private apiGetLoggedInUserInformation = `${this.baseUrl}/profile/LoggedInUser`;
  private apiGetEmployersVacancies = `${this.baseUrl}/vacancy/myVacancies`;
  private apiPostEmployersVacancy = `${this.baseUrl}/vacancy/UploadVacancy`;
  private apiGetVacancyById = `${this.baseUrl}/vacancy/VacancyDetails/`;
  private apiDeleteVacancy = `${this.baseUrl}/vacancy/DeleteAVacancy/`;
  private apiUpdateJobDetails = `${this.baseUrl}/vacancy/UpdateVacancy/`;
  private apiGetAllVacancies = `${this.baseUrl}/vacancy/allPostedVacancies`;
  private apiGetMyVacancyApplications = `${this.baseUrl}/application/application/`;
  private apiPostApplicationForVacancy = `${this.baseUrl}/application/applytoJob/`;
  private apiGetJobSeekersApplications = `${this.baseUrl}/application/user/`;
  private apiGetApplicantsCV = `${this.baseUrl}/resumes/resume/`;
  private apiGetApplicantsCVDetails = `${this.baseUrl}/resumes/resumedata/`;
  private apiPostSearchQuery = `${this.baseUrl}/vacancy/SearchForVacancy`;

  constructor(private http: HttpClient) {}

  postData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload, { withCredentials: true });
  }

  postJobSekeerRegistrationData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlJobSeekerRegistration, payload, { withCredentials: true });
  }

  postRecruiterRegistrationData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlRegistration, payload, { withCredentials: true });
  }

  DownloadCv(): Observable<Blob> {
    return this.http.get(this.apiUrlDownloadUsersCV, {
      responseType: 'blob',
      withCredentials: true
    });
  }

  getInventoryData(): Observable<any> {
    return this.http.get<any>(this.apiUrlInventory);
  }

  getEmployersVacancies(): Observable<any> {
    return this.http.get<any>(this.apiGetEmployersVacancies, { withCredentials: true });
  }

  getLoggedInUser(): Observable<any> {
    return this.http.get<any>(this.apiGetLoggedInUserInformation, { withCredentials: true });
  }

  getLoggedInUserDetails(): Observable<any> {
    return this.http.get<any>(this.apiGetLoggedInUserInformationDetails, { withCredentials: true });
  }

  getExperienceData(): Observable<any> {
    return this.http.get<any>(this.apiGetExperience, { withCredentials: true });
  }

  getEducationData(): Observable<any> {
    return this.http.get<any>(this.apiGetEducation, { withCredentials: true });
  }

  getAllVacancies(): Observable<any> {
    return this.http.get<any>(this.apiGetAllVacancies, { withCredentials: true });
  }

  getUsersCV(UserID: any): Observable<any> {
    return this.http.get<any>(this.apiUrlgetUsersCV + UserID, { withCredentials: true });
  }

  getApplicantsCV(vacancyId: any): Observable<Blob> {
    return this.http.get(`${this.apiGetApplicantsCV}${vacancyId}`, {
      responseType: 'blob',
      withCredentials: true
    });
  }

  getApplicantCvDetails(Id: any): Observable<any> {
    return this.http.get<any>(this.apiGetApplicantsCVDetails + Id, { withCredentials: true });
  }

  getVacancyById(id: any): Observable<any> {
    return this.http.get<any>(this.apiGetVacancyById + id, { withCredentials: true });
  }

  getVacancyApplications(id: any): Observable<any> {
    return this.http.get<any>(this.apiGetMyVacancyApplications + id, { withCredentials: true });
  }

  postUserCV(payload: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrlAddUserCV, payload, { withCredentials: true });
  }

  postEmployersVacancy(payload: FormData): Observable<any> {
    return this.http.post<any>(this.apiPostEmployersVacancy, payload, { withCredentials: true });
  }

  getJobSeekersApplications(UserId: number): Observable<any> {
    return this.http.get<any>(this.apiGetJobSeekersApplications + UserId, { withCredentials: true });
  }

  postEditExp(Id: number, payload: any): Observable<any> {
    return this.http.put<any>(this.apiEditWorkExp + Id, payload, { withCredentials: true });
  }

  postApplicationforvacancy(Id: number, payload: any): Observable<any> {
    return this.http.post<any>(this.apiPostApplicationForVacancy + Id, payload, { withCredentials: true });
  }

  postUserLogout(): Observable<any> {
    return this.http.post<any>(this.apiUserLogout, {}, { withCredentials: true });
  }

  postWorkExperience(payload: any): Observable<any> {
    return this.http.post<any>(this.apipostWorkExp, payload, { withCredentials: true });
  }

  postEducation(payload: any): Observable<any> {
    return this.http.post<any>(this.apipostEducation, payload, { withCredentials: true });
  }

  EditEducation(Id: number, payload: any): Observable<any> {
    return this.http.put<any>(this.apiEditEducation + Id, payload, { withCredentials: true });
  }

  EditPostedVacancy(Id: number, payload: any): Observable<any> {
    return this.http.put<any>(this.apiUpdateJobDetails + Id, payload, { withCredentials: true });
  }

  DeleteEducation(Id: number): Observable<any> {
    return this.http.delete<any>(this.apiDeleteEducation + Id, { withCredentials: true });
  }

  DeleteExp(Id: number): Observable<any> {
    return this.http.delete<any>(this.apiDeleteExperience + Id, { withCredentials: true });
  }

  DeleteVacancy(Id: any): Observable<any> {
    return this.http.delete<any>(this.apiDeleteVacancy + Id, { withCredentials: true });
  }

  DeleteCv(): Observable<any> {
    return this.http.delete<any>(this.apiDeleteData, { withCredentials: true });
  }

  postSearchQuery(payload: any): Observable<any> {
    return this.http.post<any>(this.apiPostSearchQuery, payload, { withCredentials: true });
  }
}