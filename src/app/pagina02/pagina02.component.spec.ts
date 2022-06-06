import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina02Component } from './pagina02.component';

describe('Pagina02Component', () => {
  let component: Pagina02Component;
  let fixture: ComponentFixture<Pagina02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
