class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head=newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        if(this.length === 0) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;

        return value;
    }

    find(val) {
        let thisNode = this.head;
        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode.value;
            }
            thisNode= thisNode.next;
        }
        return "not found";
    }

    remove(val) {
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === val) {
            this.removeFromHead();
            return this;
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }

    addMultipleNodesToHead(...values) {
        values.forEach(value => this.addToHead(value));
        return this;
    }
}

const list = new LinkedList('first')
                .addToHead('second')
                .addToHead('third');

console.log(list);

list.removeFromHead();
console.log(list);

console.log(list.find('second'));
console.log(list.find('kird'));

