import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ProductosEffects } from "./productos.effects";
import { ProductosService } from "./productos.service";
import { Observable } from "rxjs/Observable";

describe('ProductosEffects', () => {
  let runner, productosEffects, productosService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      ProductosEffects,
      {
        provide: ProductosService,
        useValue: jasmine.createSpyObj('productosService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    productosEffects = TestBed.get(ProductosEffects);
    productosService = TestBed.get(ProductosService);
  });

  describe('productos$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});