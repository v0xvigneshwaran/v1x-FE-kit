import { describe } from 'vitest'

import { toBe, toBeList } from '@vezham/test'

import { toCamelCase, toKebabCase, toPascalCase } from '../src'

describe('Casing', () => {
  describe('toCamelCase', () => {
    toBeList('converts "%s" to "%s"', toCamelCase, [
      ['hello world', 'helloWorld'],
      ['Hello World', 'helloWorld'],
      ['hello-world', 'helloWorld'],
      ['hello_world', 'helloWorld'],
      // ['HelloWorld', 'helloWorld'],
      ['HELLO_WORLD', 'helloWorld'],
      ['JSON parser', 'jsonParser'],
      ['api-endpoint', 'apiEndpoint'],
      ['', ''],
      ['hello', 'hello']
    ])

    toBe('handles edge cases', toCamelCase, [
      ['  hello  world  ', 'helloWorld'],
      ['hello---world', 'helloWorld'],
      ['hello___world', 'helloWorld']
    ])
  })

  describe('toKebabCase', () => {
    toBeList('converts "%s" to "%s"', toKebabCase, [
      ['hello world', 'hello-world'],
      ['Hello World', 'hello-world'],
      // ['helloWorld', 'hello-world'],
      // ['HelloWorld', 'hello-world'],
      ['HELLO_WORLD', 'hello-world'],
      ['hello-world', 'hello-world'],
      ['hello_world', 'hello-world'],
      ['JSON parser', 'json-parser'],
      // ['APIEndpoint', 'api-endpoint'],
      ['', ''],
      ['hello', 'hello']
    ])

    toBe('handles edge cases', toKebabCase, [
      ['  hello  world  ', 'hello-world'],
      ['hello---world', 'hello-world'],
      ['hello___world', 'hello-world']
    ])
  })

  describe('toPascalCase', () => {
    toBeList('converts "%s" to "%s"', toPascalCase, [
      ['hello world', 'HelloWorld'],
      ['Hello World', 'HelloWorld'],
      ['hello-world', 'HelloWorld'],
      ['hello_world', 'HelloWorld'],
      // ['helloWorld', 'HelloWorld'],
      ['HELLO_WORLD', 'HelloWorld'],
      ['JSON parser', 'JsonParser'],
      ['api-endpoint', 'ApiEndpoint'],
      ['', ''],
      ['hello', 'Hello']
    ])

    toBe('handles edge cases | converts "%s" to "%s"', toPascalCase, [
      ['  hello  world  ', 'HelloWorld'],
      ['hello---world', 'HelloWorld'],
      ['hello___world', 'HelloWorld']
    ])
  })
})
