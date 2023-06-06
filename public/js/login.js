const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log('referenced');

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('failed to log in')
            console.log('failed');
        }
    }
};


document
    .querySelector('.login-form')
    .addEventListener('submit', loginHandler);

document.querySelector('#submit-button').addEventListener('click', loginHandler);

console.log('I hope this works');