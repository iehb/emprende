import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralEvaluadorComponent } from './lateral-evaluador.component';

describe('LateralEvaluadorComponent', () => {
  let component: LateralEvaluadorComponent;
  let fixture: ComponentFixture<LateralEvaluadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralEvaluadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
