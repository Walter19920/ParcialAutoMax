import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResenasComponente } from './resenas-componente';

describe('ResenasComponente', () => {
  let component: ResenasComponente;
  let fixture: ComponentFixture<ResenasComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenasComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(ResenasComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
