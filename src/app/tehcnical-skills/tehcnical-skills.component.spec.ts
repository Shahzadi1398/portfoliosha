import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TehcnicalSkillsComponent } from './tehcnical-skills.component';

describe('TehcnicalSkillsComponent', () => {
  let component: TehcnicalSkillsComponent;
  let fixture: ComponentFixture<TehcnicalSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TehcnicalSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TehcnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
