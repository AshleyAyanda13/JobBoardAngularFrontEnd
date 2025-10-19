import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekersapplicationsComponent } from './jobseekersapplications.component';

describe('JobseekersapplicationsComponent', () => {
  let component: JobseekersapplicationsComponent;
  let fixture: ComponentFixture<JobseekersapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekersapplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekersapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
