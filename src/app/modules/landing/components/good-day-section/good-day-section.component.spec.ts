import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDaySectionComponent } from './good-day-section.component';

describe('GoodDaySectionComponent', () => {
  let component: GoodDaySectionComponent;
  let fixture: ComponentFixture<GoodDaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodDaySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodDaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
