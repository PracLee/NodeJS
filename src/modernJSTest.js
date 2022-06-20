// @ts-nocheck
/* eslint-disable no-restricted-syntax */

/**
 * @typedef Person
 *
 * @property {number} age
 * @property {string} city
 * @property {string | string[]} [pet]
 */

/** @type {Person[]} */
const people = [
  {
    age: 20,
    city: '서울',
    pet: ['cat', 'dog'],
  },
  {
    age: 40,
    city: '부산',
  },
  {
    age: 31,
    city: '대구',
    pet: ['cat', 'dog'],
  },
  {
    age: 36,
    city: '서울',
  },
  {
    age: 27,
    city: '부산',
    pet: 'cat',
  },
  {
    age: 24,
    city: '서울',
    pet: 'dog',
  },
]

/**
 * 1. 30대 미만이 한명이라도 사는 모든 도시
 * 2. 각 도시별로 개와 고양이를 키우는 사람의 수
 */

// 원데이터 변형
function solve1() {
  /** @type {string[]} */
  const cities = []
  for (const Person of people) {
    if (Person.age < 30) {
      if (!cities.find((city) => Person.city === city)) {
        cities.push(Person.city)
      }
    }
  }
  return cities
}

// 원데이터 변형 X
function solve1Functional() {
  const allCities = people.filter(({ age }) => age < 30).map(({ city }) => city)
  const set = new Set(allCities)
  return Array.from(set)
}

console.log('solve1 : ', solve1())
console.log('solve1Functional : ', solve1Functional())

// 2. 각 도시별로 개와 고양이를 키우는 사람의 수

/**
 * {
 *    "서울" {
 *    "dog": 2,
 *    "cat": 1,
 *  },
 *    "대구" {
 *    "dog": 1,
 *    "cat": 1,
 *  },
 *    "부산" {
 *    "cat": 1,
 *  },
 * }
 */

/** @typedef {Object.<string, Object.<string,number>} PetsOfCities*/

function solve2() {
  /** @type {PetsOfCities} */
  const result = {}

  for (const Person of people) {
    const { city, pet: petOrPets } = Person

    if (petOrPets) {
      const petsOfCity = result[city] || {}
      if (typeof petOrPets === 'string') {
        const pet = petOrPets
        const origNumPetsOfCity = petsOfCity[pet] || 0
        petsOfCity[pet] = origNumPetsOfCity + 1
      } else {
        for (const pet of petOrPets) {
          const origNumPetsOfCity = petsOfCity[pet] || 0
          petsOfCity[pet] = origNumPetsOfCity + 1
        }
      }

      result[city] = petsOfCity
    }
  }

  return result
}

/**
 * [
 *  ["서울", "cat"],
 *  ["서울", "dog"],
 *  ["부산", "dog"],
 * ]
 */

function solve2Functional() {
  return people
    .map(({ pet: petOrPets, city }) => {
      const pets =
        (typeof petOrPets === 'string' ? [petOrPets] : petOrPets) || []

      return {
        city,
        pets,
      }
    })
    .map(({ city, pets }) => {})
}

console.log('solve2', solve2())
