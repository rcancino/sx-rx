import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { LineasEffects } from "../effects/lineas.effects";
import { LineasService } from "../services/lineas.service";
import { Observable } from "rxjs/Observable";

describe('LineasEffects', () => {
  let runner, lineasEffects, lineasService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      LineasEffects,
      {
        provide: LineasService,
        useValue: jasmine.createSpyObj('lineasService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    lineasEffects = TestBed.get(LineasEffects);
    lineasService = TestBed.get(LineasService);
  });

  describe('lineas$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});