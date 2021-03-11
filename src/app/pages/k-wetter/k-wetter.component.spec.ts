import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KWetterComponent } from './k-wetter.component';

describe('KWetterComponent', () => {
  let component: KWetterComponent;
  let fixture: ComponentFixture<KWetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KWetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KWetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
