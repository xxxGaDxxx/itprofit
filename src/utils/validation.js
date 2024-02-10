export function validateForm(form) {
	let isValid = true;
	
	const nameInput = form.querySelector('#name');
	const nameError = form.querySelector('#name-error');
	if (nameInput.value.trim() === '') {
		nameError.textContent = 'Введите имя';
		isValid = false;
	}
	if (isValid) {
		nameError.textContent = '';
	}
	
	const emailInput = form.querySelector('#email');
	const emailError = form.querySelector('#email-error');
	if (emailInput.value.trim() === '') {
		emailError.textContent = 'Введите email';
		isValid = false;
	}
	if (!isValidEmail(emailInput.value.trim())) {
		emailError.textContent = 'Введите валидный email';
		isValid = false;
	}
	if (isValid) {
		emailError.textContent = '';
	}
	
	const phoneInput = form.querySelector('#phone');
	const phoneError = form.querySelector('#phone-error');
	const phoneRegex = /^\+\d{1,3} \(\d{2,3}\) \d{3}-\d{2}-\d{2}$/;
	
	if (phoneInput.value.trim() === '') {
		phoneError.textContent = 'Введите номер телефона';
		isValid = false;
	}
	if (!phoneRegex.test(phoneInput.value.trim())) {
		phoneError.textContent = 'Введите валидный номер телефона';
		isValid = false;
	}
	if (isValid) {
		phoneError.textContent = '';
	}
	
	const messageInput = form.querySelector('#message');
	const messageError = form.querySelector('#message-error');
	if (messageInput.value.trim() === '') {
		messageError.textContent = 'Введите сообщение';
		isValid = false;
	}
	if (messageInput.value.trim().length < 15) {
		messageError.textContent = 'Сообщение должно содержать не мение 15 символов';
		isValid = false;
	}
	if (isValid) {
		messageError.textContent = '';
	}
	
	return isValid;
}

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
