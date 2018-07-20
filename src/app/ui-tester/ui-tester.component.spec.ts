import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTesterComponent } from './ui-tester.component';

describe('UiTesterComponent', () => {
  let component: UiTesterComponent;
  let fixture: ComponentFixture<UiTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
