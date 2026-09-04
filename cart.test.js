const calculateCartTotal = require('./cart');

describe('calculateCartTotal', () => {
  const mockUser = { id: 1, name: 'Test User' }; // mock de un usuario

  test('calcula el total correcto para un cliente regular', () => {
    const items = [{ price: 100, qty: 2 }];
    const result = calculateCartTotal(items, 'regular', 0, mockUser);
    expect(result).toBe(200);
  });

  test('aplica el descuento VIP correctamente', () => {
    const items = [{ price: 100, qty: 2 }];
    const result = calculateCartTotal(items, 'vip', 0, mockUser);
    expect(result).toBe(180); // 200 - 10%
  });

  test('aplica un descuento manual', () => {
    const items = [{ price: 100, qty: 1 }];
    const result = calculateCartTotal(items, 'regular', 20, mockUser);
    expect(result).toBe(80);
  });

  test('el total nunca es negativo', () => {
    const items = [{ price: 10, qty: 1 }];
    const result = calculateCartTotal(items, 'regular', 100, mockUser);
    expect(result).toBe(0);
  });

  test('lanza un error si no hay usuario', () => {
    const items = [{ price: 10, qty: 1 }];
    expect(() => calculateCartTotal(items, 'regular', 0, null)).toThrow();
  });
});
