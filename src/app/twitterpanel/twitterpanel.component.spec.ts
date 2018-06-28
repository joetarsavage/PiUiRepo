import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterpanelComponent } from './twitterpanel.component';

describe('TwitterpanelComponent', () => {
  let component: TwitterpanelComponent;
  let fixture: ComponentFixture<TwitterpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
