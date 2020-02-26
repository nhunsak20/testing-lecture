import { sum, sayHello } from '../functions'

test('Sum adds 1 and 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
});

test('sayHello says hello', () => {
    expect(sayHello()).toBe('hello')
})

test('Object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2

    expect(data).toEqual({ one: 1, two: 2 })
})

test('True is truthy', () => {
    expect(true).toBeTruthy()
})

test('False is falsey', () => {
    expect(false).not.toBeTruthy()
})

const names = ['andrew', 'becca', 'cole', 'ronald mcdonald']

test('Name contains becca', () => {
    expect(names).toContain('becca')
    expect(names).not.toContain('nick')
})