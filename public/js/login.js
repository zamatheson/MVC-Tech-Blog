const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#PW-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            let result = await response.json()
            alert(result.message)
        }
    } 
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);