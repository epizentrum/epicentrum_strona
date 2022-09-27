window.addEventListener('load', e => {
	setTimeout(() => {
		document.querySelector('#loading-screen').style.opacity = '0';
	}, 3000);
	setTimeout(() => {
		document.querySelector('#loading-screen').style.display = 'none';
	}, 3500);
});
