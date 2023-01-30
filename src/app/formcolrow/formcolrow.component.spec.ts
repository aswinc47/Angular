import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcolrowComponent } from './formcolrow.component';

describe('FormcolrowComponent', () => {
  let component: FormcolrowComponent;
  let fixture: ComponentFixture<FormcolrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcolrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcolrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
