
export class LoginClass {
    email!: string;
    password!: string;
    constructor(email: string, password: string,) {
        this.email = email;
        this.password = password;
    }

    setData() {
        localStorage.setItem('user', JSON.stringify(this.email));
    }
}