import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagepanelComponent } from './imagepanel.component';

describe('ImagepanelComponent', () => {
  let component: ImagepanelComponent;
  let fixture: ComponentFixture<ImagepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
