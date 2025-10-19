import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultsavailablevacanciesPageComponent } from './searchresultsavailablevacancies-page.component';

describe('SearchresultsavailablevacanciesPageComponent', () => {
  let component: SearchresultsavailablevacanciesPageComponent;
  let fixture: ComponentFixture<SearchresultsavailablevacanciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchresultsavailablevacanciesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchresultsavailablevacanciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
