document.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formspree.io/f/myzdavje', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // Convert JavaScript object to JSON string
            });

            if (response.ok) {
                // Handle success (e.g., redirect to a thank you page)
                console.log('Form submitted successfully!');
            } else {
                // Handle error
                console.error('Form submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    });