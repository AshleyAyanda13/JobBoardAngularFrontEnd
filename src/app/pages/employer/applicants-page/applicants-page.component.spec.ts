import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsPageComponent } from './applicants-page.component';

describe('ApplicantsPageComponent', () => {
  let component: ApplicantsPageComponent;
  let fixture: ComponentFixture<ApplicantsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
