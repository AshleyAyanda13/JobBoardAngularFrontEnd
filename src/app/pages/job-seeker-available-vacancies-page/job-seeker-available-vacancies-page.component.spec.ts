import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerAvailableVacanciesPageComponent } from './job-seeker-available-vacancies-page.component';

describe('JobSeekerAvailableVacanciesPageComponent', () => {
  let component: JobSeekerAvailableVacanciesPageComponent;
  let fixture: ComponentFixture<JobSeekerAvailableVacanciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerAvailableVacanciesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerAvailableVacanciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
