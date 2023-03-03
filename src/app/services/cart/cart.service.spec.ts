import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CartService } from './cart.service';
import { PRODUCT_MOCK_DATA, CART_MOCK_DATA } from '../service.mockData';
import { of } from 'rxjs';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // describe('set cart product', () => {
  //   it('should store the product in localStorage',
  //     () => {
  //       localStorage.setItem('cart_items', PRODUCT_MOCK_DATA);
  //       expect(service.addToCart(PRODUCT_MOCK_DATA)).toEqual(CART_MOCK_DATA);
  //   });
  // });

  describe('get cart product', () => {
    it('should store the product in localStorage',
      () => {
        const data: any = {
          id:1677649737165,
          product: PRODUCT_MOCK_DATA,
          quantity: 2
        }
        service.addToCart(data);
        expect(localStorage.getItem('cart_items')).toEqual(CART_MOCK_DATA);
    });
  });
});
