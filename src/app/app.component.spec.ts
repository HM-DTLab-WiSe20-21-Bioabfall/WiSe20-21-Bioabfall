import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module'; 
import { LandingComponent } from './landing/landing.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';


 
describe('AppComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent},
          { path: 'app-layout', component: DummyComponent},
          ])],
      
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('Should navigate to / before button click',() => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bio10'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bio10');
  });

});

@Component({ template:''})
class DummyComponent{}