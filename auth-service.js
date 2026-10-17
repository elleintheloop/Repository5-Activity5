
function authenticateUser(username, password) {
    if (username && password) {
        return true;
    }

    return false;
}

console.log(authenticateUser("student", "password123"));