import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarUrlComponent } from './buscar-url.component';

describe('BuscarUrlComponent', () => {
  let component: BuscarUrlComponent;
  let fixture: ComponentFixture<BuscarUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
