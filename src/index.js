import Inputmask from 'inputmask';
import { sendDataToServer, handleResponse } from './api/api';
import { validateForm } from './validation/validation';
import './modal/modal.js';
import './styles/styles.scss';
import './styles/modal.scss';

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('feedback-form');
	const submitBtn = document.getElementById('submit-btn');
	const spinner = document.getElementById('spinner');
	
	const phoneInput = document.getElementById('phone');
	Inputmask({ mask: '+375 (99) 999-99-99' }).mask(phoneInput);
	
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		if (validateForm(form)) {
			submitBtn.disabled = true;
			spinner.style.display = 'inline-block';
			
			sendDataToServer(form)
				.then(data => handleResponse(data))
				.catch(error => console.error('Error:', error))
				.finally(() => {
					submitBtn.disabled = false;
					spinner.style.display = 'none';
				});
		}
	});
});
