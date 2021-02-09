const list = {
    head: {
        value: 6,
        next: {
            value: 10,
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null
                }
            }
        }
    }
};

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    head; // head pointer
    size;
    constructor(node) {
       this.head = node;
       this.size = this.getLength();
    }

    // Method 对链表的操作就是不要忘记头指针head,虚拟指针(pre cur next) 当前指针从头到尾遍历(如何往下走) 长度++
    append(element) {
        const node = new ListNode(element);
        if (this.head == null)
            this.head = node;
        else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next
            }
            cur.next = node;

        }
        this.size++;
    }

    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            const node = new Node(element);
            let curr, prev;

            curr = this.head;
            // add the element to the
            // first index
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;

        }
    }
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }

    }
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    // finds the index of element
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    getLength() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next //  when next === null loop end
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null ? true: -1;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }

}
let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(7);
node1.next = node2;
let list = new LinkedList(node1)
list.append(node3);
console.log(list.size); // 2


// 对整个链表的操作
function  reverseLinkedList(list,head,tail) {
    if (list.size === 0 || head === null || tail === null){
        return false;
    }
    else {
        let cur = head,
        pre = null;

        while (cur !== tail) {
            // 记录数据 修改数据
            let next = cur.next;
            cur.next = pre;

            // 链表往下走
            pre = cur;
            cur = next;

        }
        //  最后一个指针
        if(cur === tail) {
            tail.next = pre;
        }
    }

}
