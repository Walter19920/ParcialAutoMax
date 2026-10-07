import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocionesComponente } from './promociones-componente';

describe('PromocionesComponente', () => {
  let component: PromocionesComponente;
  let fixture: ComponentFixture<PromocionesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocionesComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(PromocionesComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
