import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrarecibosComponent } from './contrarecibos.component';

describe('ContrarecibosComponent', () => {
  let component: ContrarecibosComponent;
  let fixture: ComponentFixture<ContrarecibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrarecibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrarecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
