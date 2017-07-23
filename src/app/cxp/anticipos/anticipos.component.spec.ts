import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticiposComponent } from './anticipos.component';

describe('PagosComponent', () => {
  let component: AnticiposComponent;
  let fixture: ComponentFixture<AnticiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
