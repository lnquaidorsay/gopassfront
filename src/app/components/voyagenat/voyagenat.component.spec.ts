import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagenatComponent } from './voyagenat.component';

describe('VoyagenatComponent', () => {
  let component: VoyagenatComponent;
  let fixture: ComponentFixture<VoyagenatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyagenatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagenatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
