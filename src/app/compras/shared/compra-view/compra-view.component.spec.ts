import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraViewComponent } from './compra-view.component';

describe('CompraViewComponent', () => {
  let component: CompraViewComponent;
  let fixture: ComponentFixture<CompraViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
