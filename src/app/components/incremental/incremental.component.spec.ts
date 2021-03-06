import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalComponent } from './incremental.component';

describe('IncrementalComponent', () => {
  let component: IncrementalComponent;
  let fixture: ComponentFixture<IncrementalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
