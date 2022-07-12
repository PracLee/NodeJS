// prototype.js 에 있는 구형 class를 신형 class로 구현

class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    return `Hi, ${this.name}`
  }
}

class Student extends Person {
  constructor(name) {
    super(name)
  }

  study() {
    return `${this.name} is studying`
  }
}

const me = new Student('Be Young')
console.log(me.study())
console.log(me.greet())
