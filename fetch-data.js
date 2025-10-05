// fetch-data.js

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        // Optional: check for non-2xx responses
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // Clear loading text
        dataContainer.innerHTML = '';

        // Build and append user list
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // On error, clear and show a friendly message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Invoke when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    fetchUserData();
});
