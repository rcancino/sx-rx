import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcargoPageComponent } from './ncargo-page.component';

describe('NcargoPageComponent', () => {
  let component: NcargoPageComponent;
  let fixture: ComponentFixture<NcargoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcargoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcargoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
