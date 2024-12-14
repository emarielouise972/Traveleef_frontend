import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheVoyagesComponent } from './recherche-voyages.component';

describe('RechercheVoyagesComponent', () => {
  let component: RechercheVoyagesComponent;
  let fixture: ComponentFixture<RechercheVoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheVoyagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
