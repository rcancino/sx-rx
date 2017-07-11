import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosPageComponent } from './catalogos-page.component';

describe('CatalogosPageComponent', () => {
  let component: CatalogosPageComponent;
  let fixture: ComponentFixture<CatalogosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
