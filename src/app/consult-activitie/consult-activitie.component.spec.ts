import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultActivitieComponent } from './consult-activitie.component';

describe('ConsultActivitieComponent', () => {
  let component: ConsultActivitieComponent;
  let fixture: ComponentFixture<ConsultActivitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultActivitieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultActivitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
