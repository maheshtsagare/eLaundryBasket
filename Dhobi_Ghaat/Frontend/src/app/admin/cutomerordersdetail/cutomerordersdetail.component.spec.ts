import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerordersdetailComponent } from './cutomerordersdetail.component';

describe('CutomerordersdetailComponent', () => {
  let component: CutomerordersdetailComponent;
  let fixture: ComponentFixture<CutomerordersdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerordersdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerordersdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
