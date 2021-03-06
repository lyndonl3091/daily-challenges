//return 1 if it exist in the BST, 0 if not

this.isPresent = function(root, val) {
        // Add your code here
        let node = root;
    while(node) {
        if(node.data === val) {
            return 1
        } else {
            if(val > node.data) {
                node = node.right
            } else {
                node = node.left
            }
        }
    }
        return 0;
	};


// Linked List

  function removedNodes(list, x) {
  	var head = list;

    while(head && head.val > x) {
    	head = head.next
    }
    //if no nodes satisfy the condition, return (null)
    if(!head) return

    var currentNode = head;
    var nextNode = head.next;

    while(nextNode) {
    	//We want to skip over any node with a val > x
      //To do this, point the currentNode's next at the nextNode's next
      //We'll move the nextNode reference down and keep the currentNode reference in case
      //Otherwise, continue walking through the list by pointing the currentNode's and next
    	if(nextNode.val > x) {
      nextNode = nextNode.next;
      currentNode.next=nextNode
      } else {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    }

  	return head;

  }

  // using memo
  function verifyItems(origItems, origPrices, items, prices) {
  	var items = items.reduce(function(memo,item,i) {
    		memo[item] = prices[i]
        return memo
    }, {})

    return origItems.reduce(function(count, origITem, i) {
    		return (items[origItem] && items[origItem] !== origPrices[i]) ?
        	count + 1 : count;
    }, 0)


  }

  // singly linked list

  function LinkedList() {
    this.head = null;
  }

  LinkedList.prototype.push = function(val) {
    var node = {
      valueL val,
      next: null
    }

    if(!this.head) {
      this.head = node;
    }

    else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }


// doubly linked list

var node = {
  value: val,
  next: null,
  previous: null,
}

function doublyLinkedList() {
  this.head = null;
}

doublyLinkedList.prototype.push = function(val) {
  var head = this.head,
      current = head,
      previous = head;

  if(!head) {
    this.head = { value: val, previous: null, next: null };

  }
  else {
    while(current && current.next) {
      previous = current;
      current = current.next;
    }
    current.next = { value: val, previous: current, next: null }
  }
}

  // reverse a singly-linked list and return the start of the reversed list

  // iterative

  function reverseSinglyLinkedList(list) {

      if(!list.head || !list.head.next) return list;

      var nodes = [],
          current = list.head;

      while(current) {
        nodes.push(current);
        current = current.next;
      }

      var reversedLl = new LinkedList();

      reversedLl.head = nodes.pop();
      current = reservedLl.head;

      var node = nodes.pop();

      while(node) {
        node.next = null;
        current.next = node;

        current = current.next;
        node = nodes.pop();
      }

    return reversedLl;
  }

  // reverse double LL

  function reverseDoublyLinkedList(list){
   var head = list.head,
       current = list.head,
       tmp;
   while(current){
      tmp = current.next;
      current.next = current.previous;
      current.previous = tmp;
      if(!tmp){
         //set the last node as header
         list.head = current;
      }
      current = tmp;
   }
  return list;
}

// delete node from double linked list

function deleteNodeDLL(val){
   var current = dll.head,
       previous;

   //delete head
   if(current.value == val){
      dll.head = current.next;
      //if there is only one node, then dll.head is null
      if(dll.head) dll.head.previous = null;
      return dll;
   }

   while(current.next){
      if(current.value == val){
         previous.next = current.next;
         current.next.previous = previous;
         return dll;
     }
     previous = current;
     current = current.next;
   }

   //delete last node
   if(current.value == val){
     previous.next = null;
   }
   return dll;
}

// bubble sort

//  sort from least to largest

function bubbleSort(x) {
  let swapped;

  do {
    swapped = false;
    for(let i=0; i<x.legnth-1; i++) {
      if(x[i] > x[i+2]) {
        let temp = x[i];
        x[i] = x[i+1]
        x[i+1] = temp;
        swapped=true
      }
    }
    while(swapped);
  }
}

// insertion sort

function insertionSort(x) {

}

// implement a stack.   LIFO ,  use pop method

let stack = [];
stack.push(1);
stack.push(2);

let x = stack.pop();

// queue.  FIFO.   use shit method to get first element

let queue = [];
queue.ppush(1);
queue.ppush(2);

let y = queue.shift();

// merge sort

function mergeSort(arr) {
  if (arr.length < 2) return arr;

   var mid = Math.floor(arr.length /2);
   var subLeft = mergeSort(arr.slice(0,mid));
   var subRight = mergeSort(arr.slice(mid));

   return merge(subLeft, subRight);
}

function merge (a,b) {
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}
