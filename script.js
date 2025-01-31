document.getElementById('invoke-api').addEventListener('click', function() {
    // Example function to call GitHub Copilot API
    const apiUrl = 'https://api.github.com/repos/nskcheats/nsk-ai/issues'; // Example API endpoint

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_GITHUB_TOKEN' // Replace with your GitHub token
        }
    })
    .then(response => response.json())
    .then(data => {
        const apiResponseDiv = document.getElementById('api-response');
        apiResponseDiv.innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        const apiResponseDiv = document.getElementById('api-response');
        apiResponseDiv.innerText = 'Error fetching API data.';
    });
});
