import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDeFacturasComponent } from './selector-de-facturas.component';

describe('SelectorDeFacturasComponent', () => {
  let component: SelectorDeFacturasComponent;
  let fixture: ComponentFixture<SelectorDeFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorDeFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDeFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
