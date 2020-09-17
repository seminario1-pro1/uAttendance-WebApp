import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitsComponent } from './assits.component';

describe('AssitsComponent', () => {
  let component: AssitsComponent;
  let fixture: ComponentFixture<AssitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
