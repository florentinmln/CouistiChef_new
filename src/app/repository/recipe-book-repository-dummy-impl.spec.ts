import { TestBed } from '@angular/core/testing';

import { RecipeBookRepositoryDummyImpl } from './recipe-book-repository-dummy-impl';

describe('RecipeBookRepositoryDummyImpl', () => {
  let service: RecipeBookRepositoryDummyImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeBookRepositoryDummyImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
