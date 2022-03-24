import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcRandomNumberComponent } from './rc-random-number.component';

describe('RcRandomNumberComponent', () => {
  let component: RcRandomNumberComponent;
  let fixture: ComponentFixture<RcRandomNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcRandomNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcRandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
