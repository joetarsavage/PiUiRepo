import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemppanelComponent } from './temppanel.component';

describe('TemppanelComponent', () => {
  let component: TemppanelComponent;
  let fixture: ComponentFixture<TemppanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemppanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemppanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
