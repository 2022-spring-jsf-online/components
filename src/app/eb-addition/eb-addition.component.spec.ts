import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbAdditionComponent } from './eb-addition.component';

describe('EbAdditionComponent', () => {
  let component: EbAdditionComponent;
  let fixture: ComponentFixture<EbAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
