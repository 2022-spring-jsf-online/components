import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AszRandomToppingsComponent } from './asz-random-toppings.component';

describe('AszRandomToppingsComponent', () => {
  let component: AszRandomToppingsComponent;
  let fixture: ComponentFixture<AszRandomToppingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AszRandomToppingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AszRandomToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
