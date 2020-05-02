class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let cur = this.root;
    while (cur) {
      if (val === cur.val) return false;
      if (val < cur.val) {
        if (!cur.left) {
          cur.left = newNode;
          return this;
        } else {
          cur = cur.left;
        }
      } else {
        if (!cur.right) {
          cur.right = newNode;
          return this;
        } else {
          cur = cur.right;
        }
      }
    }
  }
  insertRe(val) {
    let newNode = new Node(val);
    function recursion(root) {
      if (val === root.val) return root;
      if (!root) {
        root = newNode;
        return root;
      } else {
        if (val < root.val) {
          root.left = recursion(root.left);
          return root;
        } else {
          root.right = recursion(root.right);
          return root;
        }
      }
    }
    this.root = recursion(this.root);
    return this;
  }

  find(val) {
    if (!this.root) return false;
    let cur = this.root;
    while (cur) {
      if (cur.val === val) return true;
      if (val < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return false;
  }
  findRe(val, root = this.root) {
    if (!root) return false;
    if (val === root.val) return true;
    if (val < root.val) return this.findRe(val, root.left);
    if (val > root.val) return this.findRe(val, root.right);
  }
  bfs() {
    let res = [];
    let temp = [];

    if (!this.root) return res;

    temp.push(this.root);
    while (temp.length) {
      let cur = temp.shift();
      res.push(cur.val);
      if (cur.left) temp.push(cur.left);
      if (cur.right) temp.push(cur.right);
    }
    return res;
  }
  preDFS(root = this.root, res = []) {
    if (!root) return res;
    res.push(root.val);
    this.preDFS(root.left, res);
    this.preDFS(root.right, res);
    return res;
  }
  postDFS(root = this.root, res = []) {
    if (!root) return res;
    this.postDFS(root.left, res);
    this.postDFS(root.right, res);
    res.push(root.val);
    return res;
  }
  inDFS(root = this.root, res = []) {
    if (!root) return res;
    this.inDFS(root.left, res);
    res.push(root.val);
    this.inDFS(root.right, res);
    return res;
  }
}

let tree = new BST();
