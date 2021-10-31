import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacturComponent } from './addfactur.component';

describe('AddfacturComponent', () => {
  let component: AddfacturComponent;
  let fixture: ComponentFixture<AddfacturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfacturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfacturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
