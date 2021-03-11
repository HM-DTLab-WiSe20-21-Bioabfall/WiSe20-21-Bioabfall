import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DOMHelper } from 'src/testing/dom-helper';
import { KTonneBewertenComponent } from './k-tonne-bewerten.component';
import { GebietService } from 'src/app/_services/gebiet.service';

describe('KTonneBewertenComponent', () => {
  let component: KTonneBewertenComponent;
  let fixture: ComponentFixture<KTonneBewertenComponent>;
  let dh: DOMHelper<KTonneBewertenComponent>;
  let GebietServiceMock: any;

  beforeEach(async () => {
    GebietServiceMock = jasmine.createSpyObj('GebietService', ['getBestPartie']);
    GebietServiceMock.getBestPartie.and.returnValue(
      { id: 'p1', strasse: 'Herzogstrasse 86', hausnummer: '11',  tonnen: [
        { id: 't1', volumen: 120 },
      ]}
    );
    await TestBed.configureTestingModule({
      declarations: [ KTonneBewertenComponent ],
      providers: [
        {provide: GebietService, useValue: GebietServiceMock} 
      ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KTonneBewertenComponent);
    component = fixture.componentInstance;
    dh = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 dropzone', () => {
    expect(dh.count('div.dropzone')).toBe(1);
  })

  it('should have 3 buttons (green, yellow, red)', () => {
    expect(dh.count('#buttongreen')).toBe(1);
    expect(dh.count('#buttonyellow')).toBe(1);
    expect(dh.count('#buttonred')).toBe(1);
  })

});
