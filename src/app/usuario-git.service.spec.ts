import { TestBed } from '@angular/core/testing';

import { UsuarioGitService } from './usuario-git.service';

describe('UsuarioGitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioGitService = TestBed.get(UsuarioGitService);
    expect(service).toBeTruthy();
  });
});
