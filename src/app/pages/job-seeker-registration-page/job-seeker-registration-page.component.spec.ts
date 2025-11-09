import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerRegistrationPageComponent } from './job-seeker-registration-page.component';

describe('JobSeekerRegistrationPageComponent', () => {
  let component: JobSeekerRegistrationPageComponent;
  let fixture: ComponentFixture<JobSeekerRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerRegistrationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
