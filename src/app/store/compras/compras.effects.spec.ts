import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ComprasEffects } from "./compras.effects";
import { ComprasService } from "./compras.service";
import { Observable } from "rxjs/Observable";

describe('ComprasEffects', () => {
  let runner, comprasEffects, comprasService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      ComprasEffects,
      {
        provide: ComprasService,
        useValue: jasmine.createSpyObj('comprasService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    comprasEffects = TestBed.get(ComprasEffects);
    comprasService = TestBed.get(ComprasService);
  });

  describe('compras$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});