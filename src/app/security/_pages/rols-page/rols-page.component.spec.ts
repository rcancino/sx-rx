import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolsPageComponent } from './rols-page.component';

describe('RolsPageComponent', () => {
  let component: RolsPageComponent;
  let fixture: ComponentFixture<RolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
