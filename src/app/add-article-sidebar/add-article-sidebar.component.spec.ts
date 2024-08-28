import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleSidebarComponent } from './add-article-sidebar.component';

describe('AddArticleSidebarComponent', () => {
  let component: AddArticleSidebarComponent;
  let fixture: ComponentFixture<AddArticleSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticleSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
