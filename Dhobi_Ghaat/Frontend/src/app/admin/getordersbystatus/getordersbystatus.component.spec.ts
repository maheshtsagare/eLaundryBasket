import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetordersbystatusComponent } from './getordersbystatus.component';

describe('GetordersbystatusComponent', () => {
  let component: GetordersbystatusComponent;
  let fixture: ComponentFixture<GetordersbystatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetordersbystatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetordersbystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
