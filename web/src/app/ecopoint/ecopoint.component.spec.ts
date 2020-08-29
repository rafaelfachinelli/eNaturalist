import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopointComponent } from './ecopoint.component';

describe('EcopointComponent', () => {
  let component: EcopointComponent;
  let fixture: ComponentFixture<EcopointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcopointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcopointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
