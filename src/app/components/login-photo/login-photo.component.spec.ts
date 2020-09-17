import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhotoComponent } from './login-photo.component';

describe('LoginPhotoComponent', () => {
  let component: LoginPhotoComponent;
  let fixture: ComponentFixture<LoginPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
