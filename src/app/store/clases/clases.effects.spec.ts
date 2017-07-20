import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ClasesEffects } from "./clases.effects";
import { ClasesService } from "./clases.service";
import { Observable } from "rxjs/Observable";

describe('ClasesEffects', () => {
  let runner, clasesEffects, clasesService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      ClasesEffects,
      {
        provide: ClasesService,
        useValue: jasmine.createSpyObj('clasesService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    clasesEffects = TestBed.get(ClasesEffects);
    clasesService = TestBed.get(ClasesService);
  });

  describe('clases$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});