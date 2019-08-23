import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDadosUsuarioComponent } from './listar-dados-usuario.component';

describe('ListarDadosUsuarioComponent', () => {
  let component: ListarDadosUsuarioComponent;
  let fixture: ComponentFixture<ListarDadosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDadosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDadosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
