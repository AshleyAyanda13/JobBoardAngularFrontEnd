import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultsavailablevacanciesComponent } from './searchresultsavailablevacancies.component';

describe('SearchresultsavailablevacanciesComponent', () => {
  let component: SearchresultsavailablevacanciesComponent;
  let fixture: ComponentFixture<SearchresultsavailablevacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchresultsavailablevacanciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchresultsavailablevacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
