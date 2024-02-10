export const createModal = ({title, description}) => {
	const modalElem = document.createElement('div');
	modalElem.className = 'modal';
	
	const modalMain = document.createElement('div');
	modalMain.className = 'modal-main';
	
	const modalContainer = document.createElement('div');
	modalContainer.className = 'modal-container';
	
	const modalClose = document.createElement('button');
	modalClose.className = 'modal-close';
	modalClose.innerHTML = '&#10006;';
	
	const modalDescription = document.createElement('p');
	modalDescription.className = 'modal-description';
	modalDescription.textContent = description;
	
	const modalTitle = document.createElement('h2');
	modalTitle.className = 'modal-title';
	modalTitle.textContent = title;
	
	modalMain.appendChild(modalTitle);
	modalContainer.appendChild(modalDescription);
	modalMain.appendChild(modalContainer);
	modalMain.appendChild(modalClose);
	modalElem.appendChild(modalMain);
	
	setTimeout(() => {
		modalElem.style.opacity = 1;
		modalElem.classList.add('modal-open');
		document.body.classList.add("modal-open");
	}, 0)
	
	
	const closeModal = () => {
		modalElem.style.opacity = 0;
		
		setTimeout(() => {
			modalElem.classList.remove('modal-open');
			modalElem.remove();
		}, 300);
	};
	
	modalClose.addEventListener('click', closeModal);
	modalElem.addEventListener('click', (event) => {
		if (event.target === modalElem) {
			closeModal();
		}
	});
	
	return modalElem;
};
