class Graph {
  constructor() {
    this.adList = {};
  }

  addVertex(vertex) {
    if (!this.adList[vertex]) this.adList[vertex] = [];
  }
  addEdge(v1, v2) {
    if (this.adList[v1] && this.adList[v2]) {
      this.adList[v1].push(v2);
      this.adList[v2].push(v1);
    }
  }
  removeEdge(v1, v2) {
    this.adList[v1] = this.adList[v1].filter((v) => v !== v2);
    this.adList[v2] = this.adList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    for (let v in this.adList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adList[vertex];
  }
  dfsRe(vertex) {
    let visited = {};
    let res = [];
    const list = this.adList;
    function dfs(v) {
      res.push(v);
      visited[v] = true;
      for (let i of list[v]) {
        if (!visited[i]) {
          dfs(i);
        }
      }
      return res;
    }
    return dfs(vertex);
  }
  dfsIt(vertex) {
    let res = [];
    let stack = [];
    let visited = {};
    stack.push(vertex);
    visited[vertex] = true;

    while (stack.length) {
      console.log(stack);
      let temp = stack.pop();
      res.push(temp);

      for (let i of this.adList[temp]) {
        if (!visited[i]) {
          stack.push(i);
          visited[i] = true;
        }
      }
    }
    return res;
  }
  bfs(vertex) {
    let res = [];
    let queue = [];
    let visited = {};
    queue.push(vertex);
    visited[vertex] = true;

    while (queue.length) {
      console.log(queue);
      let temp = queue.shift();
      res.push(temp);

      for (let i of this.adList[temp]) {
        if (!visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
    return res;
  }
}

// Build a new graph with two vertexes and one edge
let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);

graph.addEdge(1, 2);
