import randomNumber from './app';

test("random number from 1 to 1 returns 1", () => {

    expect(randomNumber(1,1)).toBe(1)

})

test("min & max are typeof Number", () => {

    expect(() => { 

        randomNumber('a', 2)

    }).toThrow()

})