import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfilComSidebarComponent } from './set-profil-com-sidebar.component';

describe('SetProfilComSidebarComponent', () => {
  let component: SetProfilComSidebarComponent;
  let fixture: ComponentFixture<SetProfilComSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProfilComSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProfilComSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
