// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  let node = new SinglyLinkedListNode(data);
  let current;

  if(head == null){
      current = node;
  } else {
      current = head;

      function nodeProccess(obj) {
          for (let property in obj) {
              if (typeof obj[property] == "object") {
                  if (obj[property] !== null) {
                      nodeProccess(obj[property]);
                  } else {
                      obj[property] = node;
                  }
              }
          }
      }
      nodeProccess(current);
  }
  // print
  console.log(current)
  return current;
}
