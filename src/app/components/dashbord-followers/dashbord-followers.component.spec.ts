import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordFollowersComponent } from './dashbord-followers.component';

describe('DashbordFollowersComponent', () => {
  let component: DashbordFollowersComponent;
  let fixture: ComponentFixture<DashbordFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordFollowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
