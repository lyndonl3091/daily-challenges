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
