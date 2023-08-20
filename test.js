let userAllowed;
let age = prompt('How old are you?', ' ');

if (age > 5) {
    userAllowed = true;
    alert(`Acces Allowed status: ${userAllowed}`);
}
else if (age >= 10) {
    alert("You're lying");
}
else {
    alert('Try again')
}