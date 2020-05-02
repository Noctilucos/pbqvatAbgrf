class Node{
    constructor(val, property){
        this.val = val
        this.property = property
    }
}

class PriorityQueue{
    constructor(){
        this.val = []
    }
    enqueue(val, property){
        let newNode = new Node(val,property)
        this.val.push(newNode)
        if(this.val.length===1) return this.val
        let index = this.val.length-1
        let parent = Math.floor((index -1)/2)
        while(this.val[index].val < this.val[parent].val){
            let temp = this.val[index]
            this.val[index] = this.val[parent]
            this.val[parent] = temp
            
            index = parent
            parent = Math.floor((index - 1) / 2)
            if(parent<0) break;
        }
        return this.val
    }
    dequeue(){
        if(this.val.length===0) return null
        if(this.val.length===1) return this.val.pop()

        let root = this.val[0]
        this.val[0] = this.val.pop()

        let parent = 0
        while(true){
            let leftIdx = 2*parent + 1
            let rightIdx = 2*parent + 2
            let left = null
            let right = null

            if(leftIdx > 0 && leftIdx < this.val.length){
                left = this.val[leftIdx].val
            }

            if(rightIdx > 0 && rightIdx < this.val.length){
                right = this.val[rightIdx].val
            }

            if(!left && !right) break;

            if(left === null && this.val[parent].val >= right){
                [this.val[parent], this.val[rightIdx]]=[this.val[rightIdx], this.val[parent]]
                parent = rightIdx
            }else if(right === null && this.val[parent].val >= left){
                [this.val[parent], this.val[leftIdx]]=[this.val[leftIdx], this.val[parent]]
                parent = leftIdx
            }else{
                if(left < right){
                    [this.val[parent], this.val[leftIdx]]=[this.val[leftIdx], this.val[parent]]
                    parent = leftIdx
                }else{
                    [this.val[parent], this.val[rightIdx]]=[this.val[rightIdx], this.val[parent]]
                    parent = rightIdx
                }
            }
            if(this.val[parent].val < left && this.val[parent].val < right) break;
        }
        console.log(this.val)
        return root
    }
}

class weightedGraph{
    constructor(){
        this.adList = {}
    }
    addVertex(vertex){
        if(!this.adList[vertex]) this.adList[vertex] = []
    }
    addEdge(v1,v2,weight){
        if(this.adList[v1] && this.adList[v2]){
            this.adList[v1].push({node:v2,weight})
            this.adList[v2].push({node:v1,weight})
        }
    }

    path(v1,v2){
        const distances = {}
        const pre = {}
        const pq = new PriorityQueue()
        let visited = []

        for(let v in this.adList){
            if(v === v1) {
                pq.enqueue(0,v)
                distances[v1] = 0
            }else{
                pq.enqueue(Infinity,v)
                distances[v] = Infinity
            }
            pre[v] = null
        }

        while(true){
            let current = pq.dequeue()
            if(current.property === v2){
                let res = []
                res.push(v2)
                function re(v2){
                    let v = pre[v2]
                    res.unshift(v)
                    if(v === v1) return res
                    return re(v)
                }
                re(v2)
                return res
            }

            let curDistance = current.val
            for(let v of this.adList[current.property]){
                if(v.weight + curDistance < distances[v.node]){
                    distances[v.node] = v.weight + curDistance
                    pq.enqueue(distances[v.node], v.node)
                    pre[v.node] = current.property
                }
            }
        }
    }
}


var graph = new weightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


