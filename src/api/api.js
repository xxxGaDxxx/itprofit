export function sendDataToServer(form) {
	const formData = new FormData(form);
	return fetch('http://localhost:9090/api/registration', {
		method: 'POST',
		body: formData
	})
		.then(response => response.json())
		.catch(error => {
			console.error('Error:', error);
			return {status: 'error', message: 'An error occurred. Please try again.'};
		});
}
