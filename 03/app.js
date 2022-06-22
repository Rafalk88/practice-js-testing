export default function randomNumber(min, max) {

    function checkIfNumberType(value) {

        if (typeof value !== 'number') {

            throw new Error('Podana wartość nie jest liczbą!')

        }
        return value

    }

    const checkedMin = checkIfNumberType(min)
    const checkedMax = checkIfNumberType(max)

    if (checkedMin > checkedMax) {

        throw new Error('Min nie może być większe od max!')

    }

    return Math.floor(Math.random() * (checkedMax-checkedMin) + checkedMin)

}