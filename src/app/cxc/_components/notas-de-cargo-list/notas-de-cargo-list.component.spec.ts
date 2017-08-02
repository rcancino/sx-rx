import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasDeCargoListComponent } from './notas-de-cargo-list.component';

describe('NotasDeCargoListComponent', () => {
  let component: NotasDeCargoListComponent;
  let fixture: ComponentFixture<NotasDeCargoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasDeCargoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasDeCargoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
