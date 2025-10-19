import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjobPageComponent } from './editjob-page.component';

describe('EditjobPageComponent', () => {
  let component: EditjobPageComponent;
  let fixture: ComponentFixture<EditjobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditjobPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditjobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
