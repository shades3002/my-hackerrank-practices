  
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {

  if (head === null) {
      return null;
  };

  if(position === 0){
      return head.next;
  };
  
  head.next = deleteNode(head.next, --position);
  return head;
}