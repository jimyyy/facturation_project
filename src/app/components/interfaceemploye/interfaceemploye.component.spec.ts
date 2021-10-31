import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceemployeComponent } from './interfaceemploye.component';

describe('InterfaceemployeComponent', () => {
  let component: InterfaceemployeComponent;
  let fixture: ComponentFixture<InterfaceemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceemployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
