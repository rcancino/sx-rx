import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesSerchCardComponent } from './clientes-serch-card.component';

describe('ClientesSerchCardComponent', () => {
  let component: ClientesSerchCardComponent;
  let fixture: ComponentFixture<ClientesSerchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesSerchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesSerchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
