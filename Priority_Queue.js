class Node{
    constructor(val, property="default"){
        this.val = val
        this.property = property
    }
}

class pq{
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

            if(left === null && this.val[parent].val > right){
                [this.val[parent], this.val[rightIdx]]=[this.val[rightIdx], this.val[parent]]
                parent = rightIdx
            }else if(right === null && this.val[parent].val > left){
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

let queue = new pq
queue.enqueue(1,"first")
queue.enqueue(2,"second")
queue.enqueue(3,"third")
queue.enqueue(0)


