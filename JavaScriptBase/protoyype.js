// Prototype
// JS에서는 function을 기반으로 하여 구형class생성

// 상속 부모클래스
function Person(name) {
  this.name = name
}
Person.prototype.greet = function greet() {
  return `Hi, ${this.name}`
}

// 부모의 생성자를 실행시켜야, 부모의 인자를 입력 할 수 있음
function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying`
}

// 연관관계 종속
Object.setPrototypeOf(Student.prototype, Person.prototype)

// me 라는 obj는 protype으로 이루어어진 인스턴스
const me = new Student('BJ')
console.log(me)
console.log(me.greet())
console.log(me.study())

// prototype 체인을 확인 후에 생성자 확인 : Student 객체로 생성했기 때문에 부모 클래스 생성자 실행도 확인 가능
console.log(me instanceof Student)
console.log(me instanceof Person)

// prototype 체인을 확인 후에 생성자 확인 : Person 객체로 생성했지 때문에 자식 클래스 생성자 실행 확인 불가능
const anotherPerson = new Person('noMan')
console.log(anotherPerson instanceof Person)
console.log(anotherPerson instanceof Student)

console.log([] instanceof Array, [] instanceof Object)
