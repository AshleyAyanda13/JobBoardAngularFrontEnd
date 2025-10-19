import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedjobsComponent } from './postedjobs.component';

describe('PostedjobsComponent', () => {
  let component: PostedjobsComponent;
  let fixture: ComponentFixture<PostedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostedjobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
