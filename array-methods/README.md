# Implementing a Array

This solution shows how to implement some array methods using classes in javascript.

Rather than using the `delete` key word in javacript, I decided to implement it as `removeProperty(index)`.

```js
    private removeProperty(index: number) {
        const { 
                [index]: removedProperty, 
                ...otherItems 
            } = this.data;
        return otherItems;
    }
```
