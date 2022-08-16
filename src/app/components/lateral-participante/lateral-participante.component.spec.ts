import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralParticipanteComponent } from './lateral-participante.component';

describe('LateralParticipanteComponent', () => {
  let component: LateralParticipanteComponent;
  let fixture: ComponentFixture<LateralParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralParticipanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
