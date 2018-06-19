import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairedTempPanelComponent } from './paired-temp-panel.component';

describe('PairedTempPanelComponent', () => {
  let component: PairedTempPanelComponent;
  let fixture: ComponentFixture<PairedTempPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairedTempPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairedTempPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
