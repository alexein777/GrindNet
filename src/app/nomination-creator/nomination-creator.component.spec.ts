import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationCreatorComponent } from './nomination-creator.component';

describe('NominationCreatorComponent', () => {
  let component: NominationCreatorComponent;
  let fixture: ComponentFixture<NominationCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
