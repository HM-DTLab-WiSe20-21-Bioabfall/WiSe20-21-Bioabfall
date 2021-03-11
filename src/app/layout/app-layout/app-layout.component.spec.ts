import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { DOMHelper } from 'src/testing/dom-helper';
import { Router } from '@angular/router';

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;
  let dh: DOMHelper<AppLayoutComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLayoutComponent ],
      imports: [
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutComponent);
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
    expect(dh.attribute('img','src')).toBe('assets/svg/AWM.svg');
  });

  it('uberschrift should be "Biomüll AWM"', () => {
    expect(dh.firstText('.uberschrift')).toBe('Biomüll Kontrolle');
  });

  it('first "mat-icon" should use icon "exit_to_app"',() => {
    expect(dh.firstText('mat-icon')).toBe('exit_to_app');
  });

  it('should bei root route', () => {
    const location = TestBed.get(Location); //erfragt aktuelle position im routing
    expect(location.path()).toBe('');       //ist die aktuelle position die root
  });

  it('should navigate to "/" on "Logout" button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(0);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined });
  });

  it('should navigate to /k-auftrag-ubersicht on "Aufträge" button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/k-auftrag-ubersicht'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined });
  });

  it('should navigate to k-aktueller-auftrag on "Aufträge" button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(2);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/k-aktueller-auftrag'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined });
  });

  it('should navigate to k-wetter on "Aufträge" button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');
    dh.clickButton(3);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/k-wetter'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined });
  });

});