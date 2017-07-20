import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { MarcasEffects } from "./marcas.effects";
import { MarcasService } from "./marcas.service";
import { Observable } from "rxjs/Observable";

describe('MarcasEffects', () => {
  let runner, marcasEffects, marcasService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      MarcasEffects,
      {
        provide: MarcasService,
        useValue: jasmine.createSpyObj('marcasService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    marcasEffects = TestBed.get(MarcasEffects);
    marcasService = TestBed.get(MarcasService);
  });

  describe('marcas$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});