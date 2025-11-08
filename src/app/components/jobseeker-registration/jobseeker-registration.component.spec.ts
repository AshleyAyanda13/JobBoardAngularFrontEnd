import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerRegistrationComponent } from './jobseeker-registration.component';

describe('JobseekerRegistrationComponent', () => {
  let component: JobseekerRegistrationComponent;
  let fixture: ComponentFixture<JobseekerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekerRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
