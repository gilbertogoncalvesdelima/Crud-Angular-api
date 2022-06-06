import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina01Component } from './pagina01.component';

describe('Pagina01Component', () => {
  let component: Pagina01Component;
  let fixture: ComponentFixture<Pagina01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
