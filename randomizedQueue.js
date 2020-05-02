// Exercise from Algorithm, Part I - Coursera
class rq {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.end = 0;
  }

  isEmpty() {
    if (this.end === this.head) return true;
    return false;
  }

  size() {
    return this.end - this.head + 1;
  }

  enqueue(val) {
    if (val !== 0 && !val) {
      throw "IllegalArgument";
    }
    this.arr.push(val);
    this.end++;
  }

  dequeue() {
    if (this.end === this.head) {
      throw "NoSuchElement";
    }
    let n = this.arr[this.head];
    this.head++;
    return n;
  }

  sample() {
    if (this.end === this.head) {
      throw "NoSuchElement";
    }
    let r = Math.random() * (this.end - this.head);
    r = Math.floor(r);
    return this.arr[this.head + r];
  }

  iterator() {
    let hash = {};
    let res = [];
    while (res.length < this.end - this.head) {
      let r = Math.random() * (this.end - this.head);
      r = Math.floor(r);
      if (!hash[r]) {
        hash[r] = true;
        res.push(this.arr[this.head + r]);
      }
    }
    return res;
  }
}
