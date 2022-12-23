import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersCardComponent } from './followers-card.component';

describe('FollowersCardComponent', () => {
  let component: FollowersCardComponent;
  let fixture: ComponentFixture<FollowersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
