// TODO: Node와 push() 구현하기
class Node {
  constructor(val) {
    //처음에는 next가 없기 때문에 null로 초기화
    this.val = val;
    this.next = null;
  }
}

{
  let first = new Node('hi');
  first.next = new Node('there');
  first.next.next = new Node('bye');
  // ! 위의 방법은 연결 리스트를 표현하는 아주 좋지 않은 방법
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    //만일 리스트가 비어있지 않다면, 마지막 노드의 "next"를 새롭게 생성된 노드를 가리키도록 하고 tail이 새롭게 생성된 노드를 가리키도록 설정, 그리고 길이를 하나 늘려주면된다.

    let newNode = new Node(val);
    if (!this.head) {
      //주어진 값을 받아들인 후 그것을 이용해 새로운 노드를 생성하는 것이 전부
      // *head가 리스트에 없다면 head 와 tail 을 주어진 값으로 세팅(완전 처음)
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    //전체 리스트 반환(this)
    return this;
    //단지 tail을 이용해 리스트의 마지막에 새로운 노드를 추가하고 테일을 맨 끝을 가리키도록 한 자리 움직여주면 된다.
  }

  // traverse() {
  //   let current = this.head;
  //   // current의 값이 next로 향하게 포인터를 수정해주고 값이 있다면 다시 console.log
  //   while (current) {
  //     console.log('current.val', current.val);
  //     current = current.next;
  //   }
  // }
  pop() {
    //인자를 하나도 받지 않으며 맨 뒤에있는 요소를 뽑아내는 메서드
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    // * while루프는 current가 더 이상 앞으로 나아갈 수 없을 때까지 반복
    while (current.next) {
      //newTail은 항상 current가 이전에 가리키던 것으로 설정
      newTail = current;
      current = current.next;
    }
    // console.log(current.val); // 잘가
    // console.log(newTail.val); // 하세요
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    console.log('current', current);
    if (this.length === 0) {
      //이제 리스트에 값이 없다는 뜻 pop된 요소가 마지막요소라서
      this.head = null;
      this.tail = null;
    }
    return current; //제거되는 마지막 node
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    //this.head는 newHead가 된 것
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    console.log('currentHead', currentHead);
    return currentHead;
  }

  unshift(val) {
    // 1. val을 담은 새로운 노드를 만들어준다.
    let newNode = new Node(val);
    // 2. head가 없다면(노드 자체가 없음)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    // 1.인자로 받은 인덱스가 음수거나 리스트의 길이보다 같거나 클 경우 null 반환
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    // 1. get함수 활용해서 index에 해당하는 origin Node 가져오기
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    // 리스트에서 해당 node를 발견하지 못했다면 무조건 false를 리턴
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    // push와 unshift는 this(리스트객체)를 반환하고 있으므로 !!를 통해서 boolean 값으로 반환해준다.
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    // undefined, null, false 등 원하는 falsy값을 반환하면 된다.
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    //만일 마지막 요소라면 this.pop();
    if (index === this.length - 1) return this.pop();

    //여기부터는 index가 중간에 위치하는 경우
    //1. 제거하려는 노드의 이전 노드 get
    let prev = this.get(index - 1);
    //2.
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
}

let list = new SinglyLinkedList();

list.push('I am'); // index: 0, 얘가 current
list.push('a master piece');
list.push('just kidding');
list.push('PICK ME!🌝'); // 3 -> 얘를 get해보자.

//6은 없는 node
console.log(list.insert(0, 'I am added! at first'));
console.log('list.get', list.get(5));

// TODO: Popping 구현하기
// push() 보다 까다로운 점은 마지막 노드를 제거해야 한다는 것이다.
// 또한, 테일이 새로운 마지막 노드를 가리키도록 해야 하는데 역방향 포인터를 가지고 있지 않기 떄문이다. -> tail로는 그 전의 노드를 그냥 알 수 없다.(역방향 포인터x)

// * 마지막에 두 번째 노드를 추적해야하기 때문에 두 개의 변수를 유지해야 한다.

// TODO: Shifting 구현하기
// shift() 메소드는 연결 리스트 앞에서 노드를 제거한다. pop은 맨 뒤에서 꺼내기, shift는 맨 앞에서 꺼내기
// * 현재 헤드가 가리키고 있는 노드를 제거한 후, 헤드를 헤드가 가리키고 있던 리스트의 두번째 노드를 가리키도록 한다.
// if empty, do nothing
// temp = head
// head = head.next
// delete temp

// TODO: Unshifting 구현하기
// * 새로운 노드를 리스트에 추가하는 한 방법, push와 달리 맨 앞에 노드를  추가하는 방법(shifting과 반대)

// TODO: Get 구현하기
// * 인덱스 혹은 위치를 의미하는 숫자를 인자로 받아서 주어진 위치에 있는 노드를 반환하는 메소드

// TODO: Set 구현하기
// * 위치 혹은 인덱스와 해당 인덱스에 위치한 노드를 업데이트할 값 등 두 개의 인자를 받는다.
// ? value 와 index 인자로 받음 -> set은 어떤 index의 값을 modify해주는 메서드이므로
// ! get을 활용해서 해당 index node의 값을 가져온다.

// TODO: Insert(삽입) 구현
// * set처럼 index와 value를 인자로 갖는다.
// ? 차이점은 이미 존재하는 노드를 업데이트하는 대신 'insert()'는 주어진 노드를 그곳이 어디던 주어진 위치에 새롭게 삽입한다.

// insert pseudocode
// 만약 index가 0보다 작거나 배열의 길이보다 크다면 return false -> 길이랑 같을 경우(이상)는 push 를 써서 뒤에 추가해주면 된다.
// 동시에 index가 0일 경우(node가 1개, head와 tail이 같음)는 unshift를 써서 맨앞에 넣어주면 된다.
// * insert의 로직이 필요한 부분은 node와 node사이에 삽입을 할 경우
// ? 우선, index에 해당하는 node의 바로 전에 위치하는 prev node를 알아야 한다. ->this.get(index -1); 그리고 prev node의 next가 새롭게 생성된 후 삽입되는 node를 가리키도록 만든다.

// TIP: 메서드가 true 혹은 false를 반환하도록 강제하는 것이 좋다.

// TODO: Remove 구현
