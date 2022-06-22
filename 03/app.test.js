import randomNumber from './app';

test("random number from 1 to 1 returns 1", () => {

    expect(randomNumber(1,1)).toBe(1)

})

test("min & max are typeof Number", () => {

    expect(() => { 

        randomNumber('a', 2)

    }).toThrow()

})

test("min is less than max", () => {

    expect(() => { 

        randomNumber(3, 2)

    }).toThrow()

})

test("Random number is between min and max", () => {

    expect(() => { 

        randomNumber(1, 2)

    }).toThrow()

})