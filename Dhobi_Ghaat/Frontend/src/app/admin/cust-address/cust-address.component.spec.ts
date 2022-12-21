import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAddressComponent } from './cust-address.component';

describe('CustAddressComponent', () => {
  let component: CustAddressComponent;
  let fixture: ComponentFixture<CustAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
