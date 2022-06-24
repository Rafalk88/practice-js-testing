export default class User {

    constructor(object) {

        const {email, password} = object

        this.setProp('email', email)
        this.setProp('password', password)

    }

    setProp(propName, value) {

        this[propName] = value

    }

    getEmail() {

        const {email, password} = this
        return email

    }

    getPassword() {

        const {email, password} = this
        return password

    }

}