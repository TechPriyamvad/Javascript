class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Pair {
  constructor(node, state) {
    this.node = node;
    this.state = state;
  }
}
class Tree {
  inOrderTraversal(node) {
    if (node == null) return;
    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }

  preOrderTraversal(node) {
    if (node == null) return;
    console.log(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  postOrderTraversal(node) {
    if (node == null) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.value);
  }

  iterativeInorderTraversal(rootNode) {
    let st = [];
    const pair = new Pair(rootNode, 1);
    st.push(pair);

    console.log(st);
    while (st.length) {
      let top = st[st.length - 1];
      //   console.log(top);
      if (top.state == 1) {
        top.state++;
        if (top.node.left != null) {
          const pair = new Pair(top.node.left, 1);
          st.push(pair);
        }
      } else if (top.state == 2) {
        top.state++;
        console.log(top.node.value);
        if (top.node.right != null) {
          const pair = new Pair(top.node.right, 1);
          st.push(pair);
        }
      } else if (top.state == 3) {
        st.pop();
      }
    }
  }

  iterativePreOrderTraversal(rootNode) {
    const preOrderStack = [];
    const pair = new Pair(rootNode, 1);
    preOrderStack.push(pair);

    while (preOrderStack.length) {
      let topOfStack = preOrderStack[preOrderStack.length - 1];
      if (topOfStack.state == 1) {
        topOfStack.state++;
        console.log(topOfStack.node.value);
        if (topOfStack.node.left != null) {
          const pair = new Pair(topOfStack.node.left, 1);
          preOrderStack.push(pair);
        }
      } else if (topOfStack.state == 2) {
        topOfStack.state++;
        if (topOfStack.node.right != null) {
          const pair = new Pair(topOfStack.node.right, 1);
          preOrderStack.push(pair);
        }
      } else {
        preOrderStack.pop();
      }
    }
  }

  iterativePostOrderTraversal(rootNode){
    const posStack = [];
    const pair = new Pair(rootNode,1);
    posStack.push(pair);

    while(posStack.length){
        const topStack = posStack[posStack.length-1];
        if(topStack.state==1){
            topStack.state++;
            if(topStack.node.left!=null){
                const pair = new Pair(topStack.node.left,1);
                posStack.push(pair);
            }
        }
        else if(topStack.state==2){
            topStack.state++;
            if(topStack.node.right!=null){
                const pair = new Pair(topStack.node.right,1);
                posStack.push(pair);
            }
        }
        else{
            console.log(topStack.node.value);
            posStack.pop();
        }
    }
  }
}
const rootNode = new Node('A');
rootNode.left = new Node('B');
rootNode.right = new Node('C');
rootNode.left.left = new Node('D');
rootNode.left.right = new Node('E');

const tree = new Tree();
console.log('inorder traversal');
tree.inOrderTraversal(rootNode);
console.log('\npreorder traversal');
tree.preOrderTraversal(rootNode);
console.log('\npostorder traversal');
tree.postOrderTraversal(rootNode);

console.log('\niterative inorder traversal');
tree.iterativeInorderTraversal(rootNode);

console.log('\niterative preorder traversal');
tree.iterativePreOrderTraversal(rootNode);

console.log('\niterative postorder traversal');
tree.iterativePostOrderTraversal(rootNode);
