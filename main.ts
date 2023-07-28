console.clear();

class MyArray {
    length: number;
    data: { [index: number]: any }; 

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index: number): any { 
        return this.data[index];
    }

    push(item: any) { 
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){ 
        const lastItem = this.length - 1;
        this.data = this.removeProperty(lastItem);
        this.length--;
        return this.data;
    }

    removeProperty(index: number) {
        const { [index]: removedProperty, ...otherItems } = this.data;
        return otherItems;
    }

    shiftItems(index:number) {
        for (let i =index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        return this.removeProperty(this.length - 1)
    }

    delete(index: number) { 
        this.data = this.removeProperty(index);
        this.data = this.shiftItems(index);
        this.length--;
        return this.data;
    }
}

const newArray = new MyArray();
newArray.push(3);
newArray.push(5);
newArray.push(8);
newArray.push(66);
newArray.push("sdfhsd");
newArray.push(false);

console.log(newArray.get(1));
newArray.delete(1);
newArray.delete(4);


console.log(newArray.data)



