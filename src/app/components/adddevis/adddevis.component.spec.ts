import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevisComponent } from './adddevis.component';

describe('AdddevisComponent', () => {
  let component: AdddevisComponent;
  let fixture: ComponentFixture<AdddevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
