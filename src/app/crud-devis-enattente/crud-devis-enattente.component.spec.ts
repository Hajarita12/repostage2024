import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDevisEnattenteComponent } from './crud-devis-enattente.component';

describe('CrudDevisEnattenteComponent', () => {
  let component: CrudDevisEnattenteComponent;
  let fixture: ComponentFixture<CrudDevisEnattenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDevisEnattenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDevisEnattenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
