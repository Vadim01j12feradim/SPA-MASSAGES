import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasagesComponent } from './masages.component';

describe('MasagesComponent', () => {
  let component: MasagesComponent;
  let fixture: ComponentFixture<MasagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
