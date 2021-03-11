import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuftragService } from 'src/app/_services/auftrag.service';
import { DOMHelper } from 'src/testing/dom-helper';
import { Router } from '@angular/router';
import { KAuftragUbersichtComponent } from './k-auftrag-ubersicht.component';

describe('KAuftragUbersichtComponent', () => {
  let component: KAuftragUbersichtComponent;
  let fixture: ComponentFixture<KAuftragUbersichtComponent>;
  let AuftragServiceMock: any;
  let dh: DOMHelper<KAuftragUbersichtComponent>

  beforeEach(async () => {
    
    AuftragServiceMock = jasmine.createSpyObj('AuftragService', ['getAuftraege']);
    AuftragServiceMock.getAuftraege.and.returnValue([{id: 'a1', name:'a2'}]);
    

    await TestBed.configureTestingModule({
      declarations: [ KAuftragUbersichtComponent ],
      providers: [
        {provide: AuftragService, useValue: AuftragServiceMock} 
      ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KAuftragUbersichtComponent);
    component = fixture.componentInstance;
    dh = new DOMHelper(fixture);
    fixture.detectChanges();

 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('spy should have been called', () => {
    expect(AuftragServiceMock.getAuftraege).toHaveBeenCalled();
  })

  it('service should be used', () => {
    const service: AuftragService = TestBed.get(AuftragService);
    expect(service).toBeTruthy();
  })

  it('should have at least 1 checkbox', () => {
    expect(dh.count('mat-checkbox')).toBeGreaterThanOrEqual(1);
  })

  it('should have at least 1 mat-list-item',() => {
    expect(dh.count('mat-list-item')).toBeGreaterThanOrEqual(1);
  })

  it('tracks all the arguments of its calls',() =>{
    expect(AuftragServiceMock.getAuftraege).toHaveBeenCalledWith();
  })

  it('should navigate to k-aktuelle-partie on button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(0);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/app-layout/k-aktueller-auftrag'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined }); 
  });

});


