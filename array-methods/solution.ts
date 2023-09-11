class CustomArray<T> {
    private array: T[];

    constructor(...elements: T[]) {
        this.array = [...elements];
    }

    // Push method adds an element to the end of the array.
    push(element: T): void {
        this.array.push(element);
    }

    // Pop method removes and returns the last element of the array.
    pop(): T | undefined {
        return this.array.pop();
    }

    // Slice method returns a shallow copy of a portion of the array.
    slice(start?: number, end?: number): T[] {
        return this.array.slice(start, end);
    }

    // Map method applies a function to each element of the array and returns a new array.
    map<U>(callback: (value: T, index: number, array: T[]) => U): U[] {
        return this.array.map(callback);
    }

    // Filter method returns a new array with all elements that pass the test.
    filter(callback: (value: T, index: number, array: T[]) => boolean): T[] {
        return this.array.filter(callback);
    }

    // Reduce method applies a function against an accumulator and each element in the array.
    reduce<U>(
        callback: (accumulator: U, currentValue: T, index: number, array: T[]) => U,
        initialValue: U
    ): U {
        return this.array.reduce(callback, initialValue);
    }

    // Length property returns the number of elements in the array.
    get length(): number {
        return this.array.length;
    }
}

// Example usage:
const myArray = new CustomArray<number>(1, 2, 3, 4, 5);

myArray.push(6);
console.log(myArray.slice(2, 4)); // Output: [3, 4]
const doubledArray = myArray.map((x) => x * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10, 12]
const filteredArray = myArray.filter((x) => x % 2 === 0);
console.log(filteredArray); // Output: [2, 4, 6]
const sum = myArray.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 21
console.log(myArray.length); // Output: 6

export { }
