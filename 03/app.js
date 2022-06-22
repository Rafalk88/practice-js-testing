export default function randomNumber(min, max) {

    const number = Math.floor(Math.random() * max + min)

    if (isNaN(number)) {

        return new TypeError('Wpisz liczby!')

    }
    
    return number

}