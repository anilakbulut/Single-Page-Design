import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingpagetwoComponent } from './desingpagetwo.component';

describe('DesingpagetwoComponent', () => {
  let component: DesingpagetwoComponent;
  let fixture: ComponentFixture<DesingpagetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesingpagetwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesingpagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
