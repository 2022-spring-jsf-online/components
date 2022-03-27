import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkAdditionComponent } from './tk-addition.component';

describe('TkAdditionComponent', () => {
  let component: TkAdditionComponent;
  let fixture: ComponentFixture<TkAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TkAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TkAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
