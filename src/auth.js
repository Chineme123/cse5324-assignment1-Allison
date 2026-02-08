import crypto from 'crypto';

class UserAuth {
    constructor() {
        this.users = new Map();
    }
    
    register(username, password) {
        if (this.users.has(username)) {
            return false;
        }
        const salt = crypto.randomBytes(16).toString('hex');
        const hashedPassword = crypto.createHmac('sha256', salt).update(password).digest('hex');
        this.users.set(username, { salt, password: hashedPassword });
        return true;
    }

    login(username, password) {
        if (!this.users.has(username)) {
            return false;
        }
        const user = this.users.get(username);
        const hashedPassword = crypto.createHmac('sha256', user.salt).update(password).digest('hex');
        return hashedPassword === user.password;
    }
}

if (require.main === module) {
    const auth = new UserAuth();
    auth.register('alice', 'password123');
    console.log(`Login success: ${auth.login('alice', 'password123')}`);
}