import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoredesComponent } from './logoredes.component';

describe('LogoredesComponent', () => {
  let component: LogoredesComponent;
  let fixture: ComponentFixture<LogoredesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoredesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoredesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
