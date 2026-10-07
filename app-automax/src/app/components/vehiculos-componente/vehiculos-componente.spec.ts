import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculosComponente } from './vehiculos-componente';

describe('VehiculosComponente', () => {
  let component: VehiculosComponente;
  let fixture: ComponentFixture<VehiculosComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculosComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
