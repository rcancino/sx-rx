import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxcMainPageComponent } from './cxc-main-page.component';

describe('CxcMainPageComponent', () => {
  let component: CxcMainPageComponent;
  let fixture: ComponentFixture<CxcMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxcMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxcMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
