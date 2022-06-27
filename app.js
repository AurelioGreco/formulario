const formulario = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#btnEnviar');
const btnCargando = document.querySelector('#btnCargando');
const toast = document.querySelector('.toast');
formulario.addEventListener('submit', e => {
	e.preventDefault();
	const datos = new FormData(formulario)
	console.log('Correo electrónico:', datos.get('emailCampo'));
	console.log('Contraseña:', datos.get('passwordCampo'));
	btnEnviar.classList.add('d-none')
	btnCargando.classList.remove('d-none')
	window.setTimeout( () => {
		btnEnviar.classList.remove('d-none')
		btnCargando.classList.add('d-none')
		const eventoToast = new bootstrap.Toast(toast)
		eventoToast.show()
	}, 2000)
	formulario.reset();
})