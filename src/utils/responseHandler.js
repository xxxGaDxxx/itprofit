import {createModal} from "../modal/modal";

export function responseHandler(response) {
	const modalElem = document.querySelector('.modal');
	const feedbackForm = document.getElementById('feedback-form');
	
	let title = ''
	let description = ''
	
	if (Boolean(modalElem)) {
		console.log('modalElem', modalElem)
		modalElem.remove();
	}
	if (response.status === 'error') {
		title = 'Что-то пошло не так...'
		description = response.message
	}
	if (response.status === 'success') {
		title = 'Запрос отправлен!'
		description = 'Пожалуйста, дождитесь ответа.'
		feedbackForm.reset()
	}
	
	const modal = createModal({title, description,});
	document.body.appendChild(modal);
}
