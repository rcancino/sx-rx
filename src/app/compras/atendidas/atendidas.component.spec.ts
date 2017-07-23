import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendidasComponent } from './atendidas.component';

describe('AtendidasComponent', () => {
  let component: AtendidasComponent;
  let fixture: ComponentFixture<AtendidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
