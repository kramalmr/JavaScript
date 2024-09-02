export default function getUser(nama) {
    return `User : ${nama}`
}

var userRole = "admin";

export function getUserRole() {
    return userRole;
}

export { userRole };