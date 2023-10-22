import { ROLES } from "./roles.enum";

export class User {
    username = '';
    email = '';
    password = '';
    userRole = ROLES.USER;

    constructor(username, email, password, userRole) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
    }

} 