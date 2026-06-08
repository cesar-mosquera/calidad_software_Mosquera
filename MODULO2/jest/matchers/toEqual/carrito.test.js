// tests/matchers.test.js
const { crearProducto, filtrarBaratos, obtenerNombres } = require('./carrito');

test('crearProducto devuelve el objeto correcto', () => {
  const producto = crearProducto('Teclado', 89.99, 2);

  expect(producto).toEqual({
    nombre:   'Teclado',
    precio:   89.99,
    cantidad: 2,
    total:    179.98,
  });
});

test('filtrarBaratos devuelve solo los productos bajo el límite', () => {
  const productos = [
    { nombre: 'Ratón',   precio: 20 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Cable',   precio: 8  },
  ];

  const baratos = filtrarBaratos(productos, 30);

  expect(baratos).toEqual([
    { nombre: 'Ratón', precio: 20 },
    { nombre: 'Cable', precio: 8  },
  ]);
});

test('obtenerNombres devuelve un array de strings con los nombres', () => {
  const productos = [
    { nombre: 'Ratón',   precio: 20 },
    { nombre: 'Teclado', precio: 50 },
  ];

  expect(obtenerNombres(productos)).toEqual(['Ratón', 'Teclado']);
});

test('filtrarBaratos con límite muy bajo devuelve array vacío', () => {
  const productos = [{ nombre: 'Monitor', precio: 300 }];
  expect(filtrarBaratos(productos, 10)).toEqual([]);
});

test('toEqual con arrays', () => {
  const numeros = [1, 2, 3].map(n => n * 2);
  expect(numeros).toEqual([2, 4, 6]);
});

test('toEqual con arrays de objetos', () => {
  const usuarios = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Luis' },
  ];

  expect(usuarios).toEqual([
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Luis' },
  ]);
});
