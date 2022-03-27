import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAdditionComponent } from './ip-addition.component';

describe('IpAdditionComponent', () => {
  let component: IpAdditionComponent;
  let fixture: ComponentFixture<IpAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
