import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxpPageComponent } from './cxp-page.component';

describe('CxcPageComponent', () => {
  let component: CxpPageComponent;
  let fixture: ComponentFixture<CxpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
