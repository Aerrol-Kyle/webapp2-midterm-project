document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = document.getElementById('username').value;

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
       
        const matchedUser = users.find(user => user.username === userInput);
        if (matchedUser) {
          window.location.href = "index2.html";
        } else {
            alert('Login failed. Username could not be founded!');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data.');
    });
});