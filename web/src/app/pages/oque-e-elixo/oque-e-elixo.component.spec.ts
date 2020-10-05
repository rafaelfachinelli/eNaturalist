import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OqueEElixoComponent } from './oque-e-elixo.component';

describe('OqueEElixoComponent', () => {
  let component: OqueEElixoComponent;
  let fixture: ComponentFixture<OqueEElixoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OqueEElixoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OqueEElixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
