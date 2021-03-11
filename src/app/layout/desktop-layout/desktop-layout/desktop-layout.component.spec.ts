import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from '@angular/common';
import { DesktopLayoutComponent } from './desktop-layout.component';
import { Router } from '@angular/router';
import { DOMHelper } from 'src/testing/dom-helper';

describe('DesktopLayoutComponent', () => {
  let component: DesktopLayoutComponent;
  let fixture: ComponentFixture<DesktopLayoutComponent>;
  let dh: DOMHelper<DesktopLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopLayoutComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopLayoutComponent);
    component = fixture.componentInstance;
    dh = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one logo', () => {
    expect(dh.count('.titlelogo')).toBe(1);
  });

  it('should have correct logo', () => {
    expect(dh.attribute('img','src'))
    .toBe('assets/svg/AWM.svg');
  });

  it('should have at least 3 buttons',() =>{
    expect(dh.count('button'))
    .toBeGreaterThanOrEqual(3);
  })

  it('uberschrift should be "AWM Zentrale"', () => {
    expect(dh.firstText('.uberschrift'))
    .toBe('AWM Zentrale');
  });

  it('used mat-icon should be "exit_to_app"',() => {
    expect(dh.firstText('mat-icon'))
    .toBe('exit_to_app');
  });

  it('should be root route', () => {
    const location = TestBed.get(Location);       //erfragt aktuelle position im routing
    expect(location.path()).toBe('');             //ist die aktuelle position die root
  });

  it('should navigate to "/" on "Logout" button click', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    dh.clickButton(0);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined });
  });

  it('should navigate to z-auftrags-disp on "Auftragsdisposition" button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/desktop-layout/z-auftrags-disp'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined }); 
  });

  it('should have at least one button with "delete" as a used icon',() => {
    expect(dh.countText('mat-icon','delete'))
    .toBeGreaterThanOrEqual(1)
  });

  it('should navigate to z-tonnen-ubersicht on "Tonnenübersicht" button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(2);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/desktop-layout/z-tonnen-ubersicht'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined }); 
  });

  it('should have at least one button with "delete_sweep" as a used icon',() => {
    expect(dh.countText('mat-icon','delete_sweep')).toBeGreaterThanOrEqual(1)
  });

  it('should navigate to z-gebietsubersicht on "Gebiete" button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(3);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/desktop-layout/z-gebietsubersicht'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined }); 
  });

  it('should have at least 4 buttons', () => {
    expect(dh.count('button')).toBeGreaterThanOrEqual(4);
  })
});
