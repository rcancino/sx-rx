import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ProveedoresEffects } from "./proveedores.effects";
import { ProveedoresService } from "./proveedores.service";
import { Observable } from "rxjs/Observable";

describe('ProveedoresEffects', () => {
  let runner, proveedoresEffects, proveedoresService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      ProveedoresEffects,
      {
        provide: ProveedoresService,
        useValue: jasmine.createSpyObj('proveedoresService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    proveedoresEffects = TestBed.get(ProveedoresEffects);
    proveedoresService = TestBed.get(ProveedoresService);
  });

  describe('proveedores$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});