import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RportilloListComponent } from './rportillo-list.component';

describe('RportilloListComponent', () => {
  let component: RportilloListComponent;
  let fixture: ComponentFixture<RportilloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RportilloListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RportilloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
