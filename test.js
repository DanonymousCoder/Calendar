let userAllowed;
let age = prompt('How old are you?', ' ');

if (age < 5) {
    userAllowed = true;
    alert(`Acces Allowed status: ${userAllowed}`);
}
else if (age >= 10) {
    alert("You're lying");
}
else if (age === 9) {
    alert("Good girl")
}
else if (age < 9) {
    alert("Stop wasting my time, and enter your age");
    alert('Try again');
}
else {
    alert('Try again')
}