import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZTonnenUbersichtComponent } from './z-tonnen-ubersicht.component';

describe('ZTonnenUbersichtComponent', () => {
  let component: ZTonnenUbersichtComponent;
  let fixture: ComponentFixture<ZTonnenUbersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZTonnenUbersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZTonnenUbersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
