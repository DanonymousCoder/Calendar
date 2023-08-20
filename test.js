let userAllowed;
let age = prompt('How old are you?', ' ');

if (age < 10) {
    userAllowed = true;
    alert(`Acces Allowed status:  ${userAllowed}`)
}
else {
    userAllowed= false;
    alert(`Acces Allowed status:  ${userAllowed}`)
}