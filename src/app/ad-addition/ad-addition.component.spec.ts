import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAdditionComponent } from './ad-addition.component';

describe('AdAdditionComponent', () => {
  let component: AdAdditionComponent;
  let fixture: ComponentFixture<AdAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
