export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} has logged out`);
    }
}
export const userHelper = () => {
    console.log("userHelper");
};
