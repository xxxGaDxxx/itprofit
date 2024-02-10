import Inputmask from 'inputmask';
import {sendDataToServer} from './api/api';
import {validateForm} from './utils/validation';
import {responseHandler} from "./utils/responseHandler";
import {createModal} from "./modal/modal";
import './modal/modal.js';
import './styles/styles.scss';
import './styles/modal.scss';

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('feedback-form');
	const submitBtn = document.getElementById('submit-btn');
	const spinner = document.getElementById('spinner');
	const openModalBtn = document.getElementById('openModalBtn'); // добавляем получение кнопки открытия модального окна
	
	const phoneInput = document.getElementById('phone');
	Inputmask({mask: '+375 (99) 999-99-99'}).mask(phoneInput);
	
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		if (validateForm(form)) {
			submitBtn.disabled = true;
			spinner.style.display = 'inline-block';
			
			sendDataToServer(form)
				.then(data => responseHandler(data))
				.catch(error => console.error('Error:', error))
				.finally(() => {
					submitBtn.disabled = false;
					spinner.style.display = 'none';
				});
		}
	});
	
	
	openModalBtn.addEventListener('click', () => {
		const modal = createModal({
			title: 'Привет!',
			description: 'Отправишь сообщение? 😉'
		});
		document.body.appendChild(modal);
	});
});
