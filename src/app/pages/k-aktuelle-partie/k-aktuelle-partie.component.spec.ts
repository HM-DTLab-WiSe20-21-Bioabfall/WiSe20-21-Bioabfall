import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GebietService } from 'src/app/_services/gebiet.service';
import { DOMHelper } from 'src/testing/dom-helper';
import { Router } from '@angular/router';
import { KAktuellePartieComponent } from './k-aktuelle-partie.component';

describe('KAktuellePartieComponent', () => {
  let component: KAktuellePartieComponent;
  let fixture: ComponentFixture<KAktuellePartieComponent>;
  let GebietServiceMock: any;
  let dh: DOMHelper<KAktuellePartieComponent>;

  beforeEach(async () => {
    GebietServiceMock = jasmine.createSpyObj('GebietService', ['getBestPartie']);
    GebietServiceMock.getBestPartie.and.returnValue(
      { id: 'p1', strasse: 'Anzigerstrasse 14', hausnummer: '04',  tonnen: [
        { id: 't1', volumen: 120 },
        { id: 't2', volumen: 120 },
      ]}
    );

    await TestBed.configureTestingModule({
      declarations: [ KAktuellePartieComponent ],
      providers: [
        {provide: GebietService, useValue: GebietServiceMock} 
      ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KAktuellePartieComponent);
    component = fixture.componentInstance;
    dh = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should be used', () => {
    const service: GebietService = TestBed.get(GebietService);
    expect(service).toBeTruthy();
  });

  it('should have one <h2> element',() =>{
    expect(dh.count('h2')).toBe(1);
  });

  it('should have at least 1 mat-list-item', () => {
    expect(dh.count('mat-list-item')).toBeGreaterThanOrEqual(1);
  });

  it('should have at least 1 checkbox', () => {
    expect(dh.count('.checkbox')).toBeGreaterThanOrEqual(1);
  });

  it('should navigate to k-tonne-bewerten on button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(0);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/app-layout/k-tonne-bewerten'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined }); 
  });

});

