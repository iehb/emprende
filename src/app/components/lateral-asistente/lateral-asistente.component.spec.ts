import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralAsistenteComponent } from './lateral-asistente.component';

describe('LateralAsistenteComponent', () => {
  let component: LateralAsistenteComponent;
  let fixture: ComponentFixture<LateralAsistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralAsistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
