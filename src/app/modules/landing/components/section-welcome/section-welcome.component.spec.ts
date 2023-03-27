import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWelcomeComponent } from './section-welcome.component';

describe('SectionWelcomeComponent', () => {
  let component: SectionWelcomeComponent;
  let fixture: ComponentFixture<SectionWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
