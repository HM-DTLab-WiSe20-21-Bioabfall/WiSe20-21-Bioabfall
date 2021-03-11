import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GebietService } from 'src/app/_services/gebiet.service';
import { DOMHelper } from 'src/testing/dom-helper';
import { Router } from '@angular/router';
import { KAktuellerAuftragComponent } from './k-aktueller-auftrag.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuftragService } from 'src/app/_services/auftrag.service';

describe('KAktuellerAuftragComponent', () => {
  let component: KAktuellerAuftragComponent;
  let fixture: ComponentFixture<KAktuellerAuftragComponent>;
  let GebietServiceMock: any;
  let AuftragServiceMock: any;
  let dh: DOMHelper<KAktuellerAuftragComponent>;

  beforeEach(async () => {
    GebietServiceMock = jasmine.createSpyObj('GebietService', ['getPartien']);
    GebietServiceMock.getPartien.and.returnValue([
      { id: 'p1', strasse: 'Herzogstrasse 86', hausnummer: '11',  tonnen: [
        { id: 't1', volumen: 120 },
        { id: 't2', volumen: 120 },
      ]}
    ]);
    AuftragServiceMock = jasmine.createSpyObj('AuftragService', ['getBestAuftrag']);
    AuftragServiceMock.getBestAuftrag.and.returnValue([
      { id: 'p1', strasse: 'Herzogstrasse 86', hausnummer: '11',  tonnen: [
        { id: 't1', volumen: 120 },
        { id: 't2', volumen: 120 },
      ]}
    ]);

    await TestBed.configureTestingModule({
      declarations: [ KAktuellerAuftragComponent ],
      providers: [
        {provide: GebietService, useValue: GebietServiceMock} ,
        {provide: AuftragService, useValue: AuftragServiceMock},
      ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KAktuellerAuftragComponent);
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
  })

  it('should have one <h2> element',() =>{
    expect(dh.count('h2')).toBe(1);
  });

  it('should have at least 1 mat-list-item', () => {
    expect(dh.count('mat-list-item')).toBeGreaterThanOrEqual(1);
  });

  it('should have at least 1 checkbox', () => {
    expect(dh.count('.checkbox')).toBeGreaterThanOrEqual(1);
  });

  it('should navigate to k-aktuelle-partie on button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(0);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/app-layout/k-aktuelle-partie'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined }); 
  });

});

