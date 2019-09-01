function Node(data){
  this.data = data;
  this.next = null;
}

class SinlgeLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;    
  }

  addChild(data){
    if(!this.head){
      this.head = new Node(data);
      this.next = this.head;      
    }
    else {this.next.next = new Node(data);
    this.next = this.next.next;}
  }

  printAllNodes(){
    let ptr = this.head;
    while(ptr){
      console.log(ptr.data);
      ptr = ptr.next;
    }
  }
}

var l1 = new SinlgeLinkedList();
l1.addChild(1124);
l1.addChild(132);
l1.addChild(322);
l1.addChild(32);
l1.printAllNodes();

