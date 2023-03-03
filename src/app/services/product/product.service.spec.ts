import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductService } from './product.service';
import { PRODUCT_MOCK_DATA } from '../service.mockData';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        ProductService
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new ProductService(httpClientSpy);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a list of products', (done) => {
    httpClientSpy.get.and.returnValue(of(PRODUCT_MOCK_DATA));
    service.getProduct().subscribe({
      next: (product) => {
        expect(product).toEqual(PRODUCT_MOCK_DATA);
        done();
      },
      error: done.fail
    });
  });

});
