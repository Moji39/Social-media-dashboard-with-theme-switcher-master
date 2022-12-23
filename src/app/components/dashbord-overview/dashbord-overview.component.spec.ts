import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordOverviewComponent } from './dashbord-overview.component';

describe('DashbordOverviewComponent', () => {
  let component: DashbordOverviewComponent;
  let fixture: ComponentFixture<DashbordOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
