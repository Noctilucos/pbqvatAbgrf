class MBH {
  constructor() {
    this.val = [];
  }

  insert(val) {
    this.val.push(val);
    if (this.val.length === 1) return this.val;
    let index = this.val.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (this.val[index] > this.val[parent]) {
      let temp = this.val[index];
      this.val[index] = this.val[parent];
      this.val[parent] = temp;

      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
    return this.val;
  }
  extractMax() {
    if (this.val.length === 0) return null;
    if (this.val.length === 1) return this.val.pop();

    let root = this.val[0];
    this.val[0] = this.val.pop();

    let parent = 0;
    let leftIdx = 2 * parent + 1;
    let left = this.val[leftIdx];
    let rightIdx = 2 * parent + 2;
    let right = this.val[rightIdx];
    while (this.val[parent] < left || this.val[parent] < right) {
      if (this.val[parent] < left && this.val[parent] < right) {
        if (left > right) {
          [this.val[parent], this.val[leftIdx]] = [
            this.val[leftIdx],
            this.val[parent],
          ];
          parent = leftIdx;
        } else {
          [this.val[parent], this.val[rightIdx]] = [
            this.val[rightIdx],
            this.val[parent],
          ];
          parent = rightIdx;
        }
      } else if (this.val[parent] < left) {
        [this.val[parent], this.val[leftIdx]] = [
          this.val[leftIdx],
          this.val[parent],
        ];
        parent = leftIdx;
      } else if (this.val[parent] > left) {
        [this.val[parent], this.val[rightIdx]] = [
          this.val[rightIdx],
          this.val[parent],
        ];
        parent = rightIdx;
      }
      leftIdx = 2 * parent + 1;
      left = this.val[leftIdx];
      rightIdx = 2 * parent + 2;
      right = this.val[rightIdx];
    }
    console.log(this.val);
    return root;
  }
}

let heap = new MBH();
heap.insert(41);
