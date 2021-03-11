import { ComponentFixture } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

export class DOMHelper<Component> {
    private fixture: ComponentFixture<Component>
    constructor(fixture: ComponentFixture<Component>){
      this.fixture = fixture;
    }
    //gibt den innerText des ersten Elements mit css Selektor "tagName" zurück
    firstText(tagName: string): string{
      const elements = this.fixture.debugElement.query(By.css(tagName));
      if(elements) {
        return elements.nativeElement.innerText;
      }
    }
    //gibt das Attribut "attributeName" des ersten Elements mit css Selektor "tagName" zurück
    attribute(tagName: string, attributeName: string):string{
      const elements = this.fixture.debugElement.query(By.css(tagName));
      if(elements)
      return elements.nativeElement.getAttribute(attributeName);
    }
    //gibt die Anzahl aller Elemente mit css Selektor "tagName" zurück
    count(tagName: string): number {
      const elements = this.fixture.debugElement.queryAll(By.css(tagName));
      return elements.length
    }
    //gibt die Anzahl aller Elemente mit css Selektor "tagName" und "innerText" zurück
    countText(tagName: string, innerText: string): number {
      const elements = this.fixture.debugElement.queryAll(By.css(tagName));
     return elements.filter(element => element.nativeElement.textContent === innerText).length;
    }
    //klickt den "buttonNumber". Button an
    clickButton(buttonNumber: number){
        const buttons = this.fixture.debugElement.queryAll(By.css('button'));    
        const nativeButton: HTMLButtonElement = buttons[buttonNumber].nativeElement;   
        nativeButton.click();                                             
        this.fixture.detectChanges();  
    }
    //klickt von allen "tagName" Elementen das "elementNumber".ste Element an 
    clickElement(tagName: string, elementNumber: number){
        const elements = this.fixture.debugElement.queryAll(By.css(tagName));    
        const nativeElement: HTMLElement = elements[elementNumber].nativeElement;   
        nativeElement.click();                                             
        this.fixture.detectChanges();  
    }
  }
  