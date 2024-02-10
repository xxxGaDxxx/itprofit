
const buttonElem = document.getElementById('openModalBtn');
const modalElem = document.querySelector('.modal');
const modalTitle = modalElem.querySelector('.modal-title');
const modalDescription = modalElem.querySelector('.modal-description');
	
	const closeModal = (event) => {
		const target = event.target;
		if (target === modalElem || target.closest('.modal-close')) {
			modalElem.style.opacity = 0;
			document.body.classList.remove("modal-open");
			
			setTimeout(() => {
				modalElem.classList.remove('modal-open');
			}, 300);
		}
	};
	const openModal = () => {
		modalElem.style.opacity = 1;
		modalElem.classList.add('modal-open');
		document.body.classList.add("modal-open");
		
		modalTitle.textContent = 'Привет!';
		modalDescription.textContent = 'Отправишь сообщение? 😉';
	};
	
	buttonElem.addEventListener('click', openModal);
	modalElem.addEventListener('click', closeModal);
	
