import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedJobsPageComponent } from './posted-jobs-page.component';

describe('PostedJobsPageComponent', () => {
  let component: PostedJobsPageComponent;
  let fixture: ComponentFixture<PostedJobsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostedJobsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
