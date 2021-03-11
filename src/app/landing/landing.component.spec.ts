import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from '@angular/common';
import { LandingComponent } from './landing.component';
import { Router } from '@angular/router';
import { DOMHelper } from 'src/testing/dom-helper';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let dh: DOMHelper<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
      imports: [
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    dh = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an h1 tag with "Guten Tag"', () => {
    expect(dh.firstText('h1')).toBe('Guten Tag');
  });

  it('should have at least 2 buttons', () => {
    expect(dh.count('button')).toBeGreaterThanOrEqual(2);
  });

  it('Kontrolleur should be first button',() => {
    expect(dh.firstText('button')).toBe('Ich bin Kontrolleur');
  });

  it('Should navigate to / before button click',() => {
    const location = TestBed.get(Location);     //erfragt aktuelle position im routing
    expect(location.path()).toBe('');           //ist die aktuelle position die root
  });

  it('should navigate to /app-layout/k-auftrag-ubersicht on Kontrolleur button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');   
    dh.clickButton(0);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/app-layout/k-auftrag-ubersicht'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined });
  });

  it('should navigate to /desktop-layout/z-auftrags-disp on Kontrolleur button click', () => {
    const router = TestBed.get(Router);
    spyOn (router,'navigateByUrl');   
    dh.clickButton(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/desktop-layout/z-auftrags-disp'])
    ,{ skipLocationChange: false, replaceUrl: false, state: undefined });
  });

  it('should have one logo', () => {
    expect(dh.count('.awmlogo')).toBe(1);
  });

  it('should have correct logo', () => {
    expect(dh.attribute('img','src')).toBe('assets/svg/AWM.svg')
  });
  
});