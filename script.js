//Developer RAFI
// Join https://t.me/RNF_MODs

document.getElementById('time-boom-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values from the input fields
    const phone = document.getElementById('phone').value;
    const hours = document.getElementById('hours').value;

    // Display result locally instead of sending to the API
    const resultDiv = document.getElementById('result');
    
    // Clear previous result
    resultDiv.innerHTML = '';

//Developer RAFI
//Join https://t.me/RNF_MODs


    // Perform simple validation
    if (phone && hours) {
        // Show loading message instantly
        resultDiv.innerHTML = `<p style="color: #ff0000;">Scheduling boom... Please wait.</p>`;

        // Create API URL with query parameters
        const apiUrl = `http://168.119.39.20/~rnfmodsc/brooo/time-boom.php?phone=${encodeURIComponent(phone)}&hours=${encodeURIComponent(hours)}`;

        try {
            // Make the API request using fetch()
            const response = await fetch(apiUrl);

            // Check if the response is OK
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            // Parse the response as text (or JSON if needed)
            const data = await response.text(); // Assuming the API returns plain text

            // Display the result from the API instantly
            resultDiv.innerHTML = `<p style="color: #ff0000;">API Response: <strong>${data}</strong></p>`;
        } catch (error) {
            // Handle any errors that occur during the fetch
            resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Please fill out both fields correctly!</p>`;
    }
});

//Developer RAFI
// Join https://t.me/RNF_MODs
