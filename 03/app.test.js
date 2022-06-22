import randomNumber from './app';

describe('Random number:', () => {

    test("from min = 1 to max = 1, returns 1", () => {

        expect(randomNumber(1,1)).toBe(1)
    
    })

    test("is between min and max", () => {

        expect(() => { 
    
            randomNumber(1, 2)
    
        }).toThrow()
    
    })

})

describe('Min & max:', () => {

    test("are typeof Number", () => {

        expect(() => { 

            randomNumber('a', 2)

        }).toThrow()

    })

    test("Min < max", () => {

        expect(() => { 

            randomNumber(3, 2)

        }).toThrow()

    })

})