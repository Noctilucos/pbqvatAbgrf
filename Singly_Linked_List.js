class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class sll{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
        let cur = this.head
        if(!this.head.next){
            this.head = null
            this.tail = null
            this.length--
            return cur
        }
        let pre = cur
        while(cur.next){
            pre = cur
            cur = cur.next
        }
        pre.next = null
        this.tail = pre
        this.length--
        return cur
    }
    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        if(!this.head){
            this.tail = null
        }
        this.length--
        return temp
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
            this.length++
            return this
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    get(index){
        if(index>this.length-1 || index<0) return false
        let count = 0
        let cur = this.head
        while(count<index){
            cur=cur.next
            count++
        }
        return cur
    }
    set(index,val){
        let thisNode = this.get(index)
        if(thisNode){
            thisNode.val = val
            return true
        }
        return false
    }
    insert(index,val){
        if(index>this.length || index<0) return false
        if(index===0) {
            this.unshift(val)
            return true
            }
        if(index===this.length) {
            this.push(val)
            return true
            }
        let pre = this.get(index-1)
        let aft = pre.next
        let newNode = new Node(val)
        newNode.next = aft
        pre.next = newNode
        this.length++
        return true
    }
    remove(index){
        if(index>this.length-1 || index<0) return false
        if(index===0) return !!this.shift()
        if(index===this.length-1) return !!this.pop()
        let pre = this.get(index-1)
        let cur = pre.next
        pre.next = cur.next
        this.length--
        return cur
    }
    reverse(){
        if(this.length === 0 || this.length === 1) return this
        let prev = this.head
        let cur = prev.next
        let aft = cur.next
        this.tail = this.head
        this.tail.next = null
        while(cur){
            console.log(cur)
            cur.next = prev
            prev = cur
            cur = aft
            aft = (cur===null?null:cur.next)
        }
        this.head = prev
        return this
    }
    search(val){
        if(!this.head) return undefined
        let cur = this.head
        let count = 0
        while(cur){
            if(cur.val===val){
                return count
            }else{
                cur = cur.next
                count++
            }
        }
        return -1
    }
}
let list = new sll;
var a=[-10,-3,0,5,9]
for(let i of a){
    list.push(i)
}