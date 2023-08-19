import LinkedList from "./linkedList.js";

// Creating a new linked list should initialize HEAD
const linkedList = new LinkedList();
linkedList.append("Dean");
linkedList.append("Kevin");
linkedList.append("Abraham");
linkedList.prepend("Nicole");
console.log(linkedList);
// console.log(linkedList.size());
console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(1));
// linkedList.pop();
console.log(linkedList);
console.log(linkedList.contains("Dean"));
console.log(linkedList.contains("Abraham"));
console.log(linkedList.find("Abraham"));
console.log(linkedList.find("Kevin"));
console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.insertAt("who?",4));
console.log(linkedList.toString());