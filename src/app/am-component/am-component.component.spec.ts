import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmComponentComponent } from './am-component.component';

describe('AmComponentComponent', () => {
  let component: AmComponentComponent;
  let fixture: ComponentFixture<AmComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
