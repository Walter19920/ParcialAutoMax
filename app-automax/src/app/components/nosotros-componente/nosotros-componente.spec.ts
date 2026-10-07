import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NosotrosComponente } from './nosotros-componente';

describe('NosotrosComponente', () => {
  let component: NosotrosComponente;
  let fixture: ComponentFixture<NosotrosComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(NosotrosComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
