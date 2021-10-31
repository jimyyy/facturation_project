import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardemployeComponent } from './dashboardemploye.component';

describe('DashboardemployeComponent', () => {
  let component: DashboardemployeComponent;
  let fixture: ComponentFixture<DashboardemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardemployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
