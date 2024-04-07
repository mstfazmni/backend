function showConfirm() {
    // Get form data
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const userId = document.getElementById("UserId").value;
    const addressVal = document.getElementById("Address").value;
    const statusSelect = document.getElementById("status_value");
    const statusVal = statusSelect.options[statusSelect.selectedIndex].text;

    // Construct request body
    const formData = {
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        address: addressVal,
        status: statusVal
    };

    // Send form data to backend
    fetch('https://rainbow-cascaron-8dd939.netlify.app/register', {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Display confirmation message based on response
        const confirmDiv = document.getElementById("confirmation-div");
        confirmDiv.style.display = 'block';
        confirmDiv.innerHTML = `<b>User:</b> ${data.firstName} ${data.lastName} <br>
                                <b>ID:</b> ${data.userId} <br>
                                <b>Status:</b> ${data.status} <br>
                                <b>Address:</b> ${data.address} <br>
                                <b>Fee:</b> ${data.fee}$`;
        // Hide the form after showing confirmation
        document.querySelector('.form-section').style.display = 'none';
    })
    .catch(error => console.error('Error:', error));

    // Clear input fields
    document.getElementById("first-name").value = "";
    document.getElementById("UserId").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("Address").value = "";
    statusSelect.selectedIndex = 0;
}
