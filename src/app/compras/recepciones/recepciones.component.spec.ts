import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionesComponent } from './recepciones.component';

describe('RecepcionesComponent', () => {
  let component: RecepcionesComponent;
  let fixture: ComponentFixture<RecepcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
