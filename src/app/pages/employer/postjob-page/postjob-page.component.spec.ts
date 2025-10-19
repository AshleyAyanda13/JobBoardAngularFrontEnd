import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostjobPageComponent } from './postjob-page.component';

describe('PostjobPageComponent', () => {
  let component: PostjobPageComponent;
  let fixture: ComponentFixture<PostjobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostjobPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostjobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
