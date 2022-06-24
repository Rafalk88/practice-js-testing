export default class User {

    constructor(object) {

        const {email, password} = object

        this.setProp('email', email)
        this.setProp('password', password)
        this.getEmail()

    }

    setProp(propName, value) {

        this[propName] = value

    }

    getEmail() {

        const {email, undefined} = this
        const at = '@'

        if (!(email.includes(at))) {

            throw new Error(
                'You wrote a wrong email!'
            )

        }

        return email

    }

    getPassword() {

        const {undefined, password} = this
        return password

    }

}