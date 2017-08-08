import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcreditoCreateComponent } from './ncredito-create.component';

describe('NcreditoCreateComponent', () => {
  let component: NcreditoCreateComponent;
  let fixture: ComponentFixture<NcreditoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcreditoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcreditoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
