# createjs-with-jest-and-canvas
A very simple example of using Jest for testing CreateJS-based canvas manipulation results

## install

```sh
$ npm install
```

## test

```sh
$ npm run test

> createjs-with-jest-and-canvas@1.0.0 test .\createjs-with-jest-and-canvas
> jest

 PASS  __tests__/canvas.js
 PASS  __tests__/createjs.js

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        5.597s
Ran all test suites.
```

## code

- `jest.config.js`: uses `jest-environment-jsdom-with-canvas` as the Jest environment
- `__tests__/canvas.js`: example tests involving raw Canvas APIs
- `__tests__/createjs.js`: example tests involving CreateJS (EaselJS) APIs

## see also

- Jest: https://jestjs.io/
- jest-environment-jsdom-with-canvas: https://github.com/arcatdmz/jest-environment-jsdom-with-canvas

---
https://github.com/arcatdmz/createjs-with-jest-and-canvas
