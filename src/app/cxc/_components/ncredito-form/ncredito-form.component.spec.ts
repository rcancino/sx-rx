import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcreditoFormComponent } from './ncredito-form.component';

describe('NcreditoFormComponent', () => {
  let component: NcreditoFormComponent;
  let fixture: ComponentFixture<NcreditoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcreditoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcreditoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
