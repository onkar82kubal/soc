import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiElementsComponent } from './ui-elements.component';

describe('UiElementsComponent', () => {
  let component: UiElementsComponent;
  let fixture: ComponentFixture<UiElementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
