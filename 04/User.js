export default class User {

    constructor(object) {

        const {email, password} = object

        this.setProp('email', email)
        this.setProp('password', password)
        this.getEmail()
        this.getPassword()

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

        if (password.length < 6) {

            throw new Error(
                'Password must be at least six chars length!'
            )

        }

        return password

    }

}