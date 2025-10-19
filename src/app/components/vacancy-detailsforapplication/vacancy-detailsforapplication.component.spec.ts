import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDetailsforapplicationComponent } from './vacancy-detailsforapplication.component';

describe('VacancyDetailsforapplicationComponent', () => {
  let component: VacancyDetailsforapplicationComponent;
  let fixture: ComponentFixture<VacancyDetailsforapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyDetailsforapplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyDetailsforapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
