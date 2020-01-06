
function countNodes(total, node){
  if(node.next !== null){
    total = total + 1;
    return countNodes(total, node.next);
  } else {
    total = total + 1;
  }
  return total;
}

function getNodeValue(head, position){
  if(position == 0){
      return head.data;
  } else {
      return getNodeValue(head.next, --position);
  };
}

function getNode(head, positionFromTail) {
  var totalNode = countNodes(0, head);
  var goalPosition = (totalNode-1)-positionFromTail;
  return getNodeValue(head, goalPosition);
}