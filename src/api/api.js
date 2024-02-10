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
	if (response.status === 'error') {
		modalTitle.textContent = 'Что-то пошло не так...';
		modalDescription.textContent = response.message;
	}
	if (response.status === 'success') {
		modalTitle.textContent = 'Запрос отправлен!';
		modalDescription.textContent = 'Пожалуйста, дождитесь ответа ответа.';
	}


	modalElem.style.opacity = 1;
	modalElem.classList.add('modal-open');
}
