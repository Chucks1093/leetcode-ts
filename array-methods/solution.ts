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

    private removeProperty(index: number) {
        const { [index]: removedProperty, ...otherItems } = this.data;
        return otherItems;
    }

    private shiftItems(index:number) {
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
newArray.push(34);
newArray.push(44);
newArray.push(66);
newArray.push(8);
newArray.push(9);
newArray.pop();








export {}
