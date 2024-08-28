import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDevisComponent } from './gestion-devis.component';

describe('GestionDevisComponent', () => {
  let component: GestionDevisComponent;
  let fixture: ComponentFixture<GestionDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
