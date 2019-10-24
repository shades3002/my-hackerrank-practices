/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
  let node = new SinglyLinkedListNode(data); 
  let current; 
  if(head === null){ 
      current = node; 
  } else { 
      current = node; 
      current.next = head; 
  } 
  return current;
}
