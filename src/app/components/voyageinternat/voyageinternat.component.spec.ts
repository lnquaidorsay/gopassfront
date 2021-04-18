import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageinternatComponent } from './voyageinternat.component';

describe('VoyageinternatComponent', () => {
  let component: VoyageinternatComponent;
  let fixture: ComponentFixture<VoyageinternatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageinternatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageinternatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
