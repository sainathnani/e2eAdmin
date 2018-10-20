import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsnackComponent } from './customsnack.component';

describe('CustomsnackComponent', () => {
  let component: CustomsnackComponent;
  let fixture: ComponentFixture<CustomsnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomsnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomsnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
