## Explaining the `CustomArray` Class for Array Methods

In this TypeScript code, we define a custom class called `CustomArray` to create and manipulate arrays in a structured and type-safe way. This class encapsulates an array and provides methods for common array operations.

#### Class Definition

```typescript
class CustomArray<T> {
```

The `CustomArray` class is a generic class, allowing you to work with arrays of different data types (e.g., numbers, strings).

##### Constructor

```typescript
  constructor(...elements: T[]) {
    this.array = [...elements];
  }
```

- The class constructor takes a variable number of elements and initializes an internal array (`this.array`) with these elements. It uses the spread operator (`...`) to create a copy of the provided elements.

##### Push Method

```typescript
  push(element: T): void {
    this.array.push(element);
  }
```

- The `push` method allows you to add an element to the end of the internal array. It takes an element of type `T` as an argument and adds it using the `push` method of the array.

##### Pop Method

```typescript
  pop(): T | undefined {
    return this.array.pop();
  }
```

- The `pop` method removes and returns the last element of the internal array. It returns the removed element, which is of type `T`, or `undefined` if the array is empty.

##### Slice Method

```typescript
  slice(start?: number, end?: number): T[] {
    return this.array.slice(start, end);
  }
```

- The `slice` method is used to create a shallow copy of a portion of the internal array. It takes optional `start` and `end` indices and returns a new array containing elements from `start` to `end` (excluding `end`).

##### Map Method

```typescript
  map<U>(callback: (value: T, index: number, array: T[]) => U): U[] {
    return this.array.map(callback);
  }
```

- The `map` method applies a given callback function to each element of the internal array and returns a new array with the results. It uses TypeScript generics to specify the return type `U`.

##### Filter Method

```typescript
  filter(callback: (value: T, index: number, array: T[]) => boolean): T[] {
    return this.array.filter(callback);
  }
```

- The `filter` method creates a new array containing elements from the internal array that pass a given test provided by the callback function. It returns an array of elements of type `T`.

##### Reduce Method

```typescript
  reduce<U>(
    callback: (accumulator: U, currentValue: T, index: number, array: T[]) => U,
    initialValue: U
  ): U {
    return this.array.reduce(callback, initialValue);
  }
```

- The `reduce` method applies a callback function to each element of the internal array, accumulating a single result. It takes an initial value and returns the accumulated result of type `U`.

##### Length Property

```typescript
  get length(): number {
    return this.array.length;
  }
```

- The `length` property provides the number of elements in the internal array.

#### Example Usage

In the example usage section, we create a `CustomArray` instance, add elements, and perform various operations on it to demonstrate the functionality of the class.

```typescript
// Create a CustomArray with initial elements.
const myArray = new CustomArray<number>(1, 2, 3, 4, 5);

// Push an element to the array.
myArray.push(6);

// Slice the array to get a portion of it.
console.log(myArray.slice(2, 4)); // Output: [3, 4]

// Use the map method to apply a function to each element.
const doubledArray = myArray.map((x) => x * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10, 12]

// Filter the array to get elements that meet a condition.
const filteredArray = myArray.filter((x) => x % 2 === 0);
console.log(filteredArray); // Output: [2, 4, 6]

// Use the reduce method to accumulate values.
const sum = myArray.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 21

// Access the length property to get the number of elements.
console.log(myArray.length); // Output: 6
```