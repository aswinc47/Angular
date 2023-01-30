import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcolComponent } from './rightcol.component';

describe('RightcolComponent', () => {
  let component: RightcolComponent;
  let fixture: ComponentFixture<RightcolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightcolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
