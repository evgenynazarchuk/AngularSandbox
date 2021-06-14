import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputOutputComponent } from './base-input-output.component';

describe('BaseInputOutputComponent', () => {
  let component: BaseInputOutputComponent;
  let fixture: ComponentFixture<BaseInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
