const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username: username, email: email, password: password }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        alert('Success! Account has been created. You will now be redirected to the dashboard.');
        document.location.replace('/dashboard');
    } else {
        alert('Unsuccessful sign up.');
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);