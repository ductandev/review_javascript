// Decorator JavaScript

// function tính tổng từ 1 đến n
function sumToN(n: number) {
  console.log('hello')
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

const n = 10
console.log(`Tổng từ 1 đến ${n} là ${sumToN(n)}`)

// Khai báo decorator
function cachingDecorator(func: (n: number) => number) {
  let cache = new Map()
  return function (n: number) {
    if (cache.has(n)) {
      return cache.get(n)
    }
    let result = func(n)
    cache.set(n, result)
    return result
  }
}

const sumToNWithCache = cachingDecorator(sumToN)

// sumToN(n)
// sumToN(n)
sumToNWithCache(n)
sumToNWithCache(n)

// ✅ Decorator TypeScript

// Khai báo decorator logger
function Logger(value: any) {
  console.log('value', value)
  return function (target: any) {
    console.log('target', target)
  }
}

@Logger('Hello')
class Person {
  constructor(
    public name: string,
    public age: number
  ) { }
}

@Logger('hi')
class Car {
  constructor(
    public name: string,
    public engine: string
  ) { }
}