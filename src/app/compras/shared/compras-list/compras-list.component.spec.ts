import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasListComponent } from './compras-list.component';

describe('ComprasListComponent', () => {
  let component: ComprasListComponent;
  let fixture: ComponentFixture<ComprasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
