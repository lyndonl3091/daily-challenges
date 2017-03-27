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
