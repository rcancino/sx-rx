import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisPageComponent } from './analisis-page.component';

describe('AnalisisPageComponent', () => {
  let component: AnalisisPageComponent;
  let fixture: ComponentFixture<AnalisisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
