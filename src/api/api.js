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

export function handleResponse(response) {
	const modalElem = document.querySelector('.modal');

	if (modalElem.opacity === 1) {
		modalElem.style.opacity = 0;
		modalElem.classList.remove('modal-open');
	}
	
	const modalTitle = document.querySelector('.modal-title');
	const modalDescription = document.querySelector('.modal-description');
	const feedbackForm = document.getElementById('feedback-form');
	
	if (response.status === 'error') {
		modalTitle.textContent = 'Что-то пошло не так...';
		modalDescription.textContent = response.message;
	}
	if (response.status === 'success') {
		modalTitle.textContent = 'Запрос отправлен!';
		modalDescription.textContent = 'Пожалуйста, дождитесь ответа ответа.';
		feedbackForm.reset()
	}


	modalElem.style.opacity = 1;
	modalElem.classList.add('modal-open');
}
