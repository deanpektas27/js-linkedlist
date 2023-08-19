import Node from './Node.js';

// Create LinkedList class, representing full list
export default class LinkedList {

    // New list includes HEAD node
    constructor() {
        this.HEAD = null;
    }
    // Adds to END of list 
    append(value) {
        if(this.HEAD == null) this.HEAD = new Node(value);
        else {
            let temp = this.HEAD;
            while(temp.nextNode != null) {
                temp = temp.nextNode;
            }
            // node with null ptr will leave while loop
            temp.nextNode = new Node(value);
        }

    }

    // Adds to BEGINNING of list
    prepend(value) {
        if(this.HEAD == null) this.HEAD = new Node(value);
        else {
            // save HEAD.next to temp variable
            let temp = this.HEAD;
            // point HEAD to new Node
            this.HEAD = new Node(value);
            //point new Node to temp var
            this.HEAD.nextNode = temp;
        }
    }

    size() {
        let count = 1;
        let temp = this.HEAD;
        while(temp.nextNode != null) {
            count++;
            temp = temp.nextNode;
        }
        return 'The size is: ' + count;
    }

    head() {
        return 'The first node is: ' + this.HEAD.value;
    }

    tail() {
        let temp = this.HEAD;
        while(temp.nextNode != null) {
            temp = temp.nextNode;
        }
        return 'The last node is: ' + temp.value;
    }

    at(index) {
        let count = 0;
        let temp = this.HEAD;
        while(temp.nextNode != null) {
            if(count == index) return `Node at index ${index} is ${temp.value}`;
            count++;
            temp = temp.nextNode;
        }
    }

    pop() {
        let temp = this.HEAD;
        while(temp.nextNode != null) {
            if(temp.nextNode.nextNode == null) {
                temp.nextNode = null;
            }
            else temp = temp.nextNode;
        }
    }

    contains(value) {
        let temp = this.HEAD;
        while(temp.nextNode != null) {
            if(temp.value == value) return `List DOES contain ${value}`;
            else temp = temp.nextNode;
        }
        return `List does NOT contain ${value}`;
    }

    find(value) {
        let count = 0;
        let temp = this.HEAD;
        while(temp.nextNode != null) {
            if(temp.value == value) return `${value} was found at index ${count}`;
            count++;
            temp = temp.nextNode;
        }
        if(temp.value == value) return `${value} was found at the last index!`;
        else return `${value} could NOT be found!`;
    }

    toString() {
        let resultString = '';
        let temp = this.HEAD;
        while(temp.nextNode != null) {
            resultString += `( ${temp.value} ) ->`;
            temp = temp.nextNode;
        }
        resultString += `( ${temp.value} ) -> null`;
        return resultString;
    }

    insertAt(value, index) {
        if(index < 0 || index > this.size()-1) return `Invalid index, ${index}`;
        else if(index == 0) {
            this.prepend(value);
        } else {
            let temp = this.HEAD;
            let count = 1;
            let previousNode = null;
            while(temp.nextNode != null) {
                previousNode = temp;
                if (count == index) {
                    let newNode = new Node(value);
                    newNode.nextNode = temp.nextNode;
                    previousNode.nextNode = newNode;
                    return this.HEAD;
                }
                else {
                    count++
                    temp = temp.nextNode;
                }
            }
            if(count == this.size() - 1) {
                let newNode = new Node(value);
                newNode.nextNode = temp;
                return this.HEAD;
            }
        }
    }

}

