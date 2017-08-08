import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcreditoPageComponent } from './ncredito-page.component';

describe('NcreditoPageComponent', () => {
  let component: NcreditoPageComponent;
  let fixture: ComponentFixture<NcreditoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcreditoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcreditoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
