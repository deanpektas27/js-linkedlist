// Create Node class, containing a 'value' property
// and a link to the 'nextNode', set both as 'null'
// by default

export default class Node {
    constructor(value) {
        if(value == null) {
            this.value = null;
        }
        else {
            this.value = value;
        }
        this.nextNode = null;
    }
}

