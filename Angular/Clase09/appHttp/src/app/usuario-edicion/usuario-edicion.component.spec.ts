import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEdicionComponent } from './usuario-edicion.component';

describe('UsuarioEdicionComponent', () => {
  let component: UsuarioEdicionComponent;
  let fixture: ComponentFixture<UsuarioEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
