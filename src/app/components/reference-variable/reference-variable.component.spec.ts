import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceVariableComponent } from './reference-variable.component';

describe('ReferenceVariableComponent', () => {
  let component: ReferenceVariableComponent;
  let fixture: ComponentFixture<ReferenceVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
