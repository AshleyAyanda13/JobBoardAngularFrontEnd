import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerhistoryComponent } from './jobseekerhistory.component';

describe('JobseekerhistoryComponent', () => {
  let component: JobseekerhistoryComponent;
  let fixture: ComponentFixture<JobseekerhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekerhistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
