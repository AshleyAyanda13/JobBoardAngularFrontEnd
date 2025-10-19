import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekeravailableVacanciesComponent } from './jobseekeravailable-vacancies.component';

describe('JobseekeravailableVacanciesComponent', () => {
  let component: JobseekeravailableVacanciesComponent;
  let fixture: ComponentFixture<JobseekeravailableVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekeravailableVacanciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekeravailableVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
