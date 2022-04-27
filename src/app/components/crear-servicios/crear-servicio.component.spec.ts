import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearservicioComponent } from './crear-servicio.component';

describe('CrearservicioComponent', () => {
  let component: CrearservicioComponent;
  let fixture: ComponentFixture<CrearservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
