import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ZAuftragsDispComponent } from './z-auftrags-disp.component';

describe('ZAuftragsDispComponent', () => {
  let component: ZAuftragsDispComponent;
  let fixture: ComponentFixture<ZAuftragsDispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZAuftragsDispComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZAuftragsDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 25 Bezirke', () => {
    const liste = fixture.debugElement.queryAll(By.css('.districts > tr'));
    expect(liste.length).toBe(26); //25 Stadtbezirke + Überschriftszeile
  });

  it('click on calender should open input window', () => {

  });

  it('should create event after button pressed', () => {

  });
});
