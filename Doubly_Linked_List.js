class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class dll {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let cur = this.tail;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = cur.prev;
      this.tail.next = null;
      cur.prev = null;
    }
    this.length--;
    return cur;
  }
  shift() {
    if (!this.head) return undefined;
    let cur = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = cur.next;
      cur.next = null;
      this.head.prev = null;
    }
    this.length--;
    return cur;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let cur;
    if (index < this.length / 2) {
      cur = this.head;
      for (let i = 0; i < index; i++) {
        cur = cur.next;
      }
    } else {
      cur = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        cur = cur.prev;
      }
    }
    return cur;
  }
  set(index, val) {
    let cur = this.get(index);
    if (cur) {
      cur.val = val;
      return this;
    }
    return false;
  }
  insert(index, val) {
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let prev = this.get(index - 1);
    if (prev) {
      let aft = prev.next;
      let cur = new Node(val);
      prev.next = cur;
      cur.prev = prev;
      cur.next = aft;
      aft.prev = cur;
      this.length++;
      return this;
    }
    return false;
  }
  remove(index) {
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let aft = this.get(index + 1);
    if (prev && aft) {
      prev.next = aft;
      aft.prev = prev;
      this.length--;
      return true;
    }
    return false;
  }
  print() {
    let res = [];
    if (!this.head) return res;
    let cur = this.head;
    while (cur) {
      res.push(cur.val);
      cur = cur.next;
    }
    return res;
  }
}

let list = new dll();
