import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRegisterComponent } from './bike-register.component';

describe('BikeRegisterComponent', () => {
  let component: BikeRegisterComponent;
  let fixture: ComponentFixture<BikeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
