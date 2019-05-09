window.addEventListener('DOMContentLoaded', function () {

	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer

	let deadLine = "2019-05-30";

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));

		hours = checkTime(hours);
		minutes = checkTime(minutes);
		seconds = checkTime(seconds);

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
		function checkTime(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
	}



	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(upDateClock, 1000);

		function upDateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				seconds.textContent = '00';
				minutes.textContent = '00';
			}


		}


	}

	setClock('timer', deadLine);

	// Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionBtn = document.querySelectorAll('.description-btn');

	function modal(target) {
		for (let i = 0; i < descriptionBtn.length; i++) {
			target[i].addEventListener('click', function () {
				overlay.style.display = 'block';
				this.classList.add('more-splash');
				document.body.style.overflow = 'hidden';
			});

			more.addEventListener('click', function () {
				overlay.style.display = 'block';
				this.classList.add('more-splash');
				document.body.style.overflow = 'hidden';
			});

			close.addEventListener('click', function () {
				overlay.style.display = 'none';
				more.classList.remove('more-splash');
				document.body.style.overflow = '';
			})
		};
	};
	modal(descriptionBtn);

	// Forma

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжимся!',
		failure: 'Что-то пошло не так...'
	},
	 	form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div'),

		forma = document.getElementById('form'),
		inputs = forma.getElementsByTagName('input'),
		input1 = forma.getElementsByTagName('input')[0],
		input2 = forma.getElementsByTagName('input')[1];
		
			// str = /\+{1}\d{1,11}/;

			input1.name = 'email';
			input2.name = 'phone';

			input2.onkeypress = function(e) {    //отмена ввода букв

				e = e || event;
	
				if (e.ctrlKey || e.altKey || e.metaKey) return;
	
				let chr = getChar(e);
	
				// с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
				// на всякий случай лучше вынести проверку chr == null отдельно
				if (chr == '+' || (chr == null)) return;
	
				if (chr < '0' || chr > '9') {
					return false;
				}
	
			};

			input[0].onkeypress = function(e) {

				e = e || event;
	
				if (e.ctrlKey || e.altKey || e.metaKey) return;
	
				let chr = getChar(e);
	
				// с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
				// на всякий случай лучше вынести проверку chr == null отдельно
				if (chr == '+' || (chr == null)) return;
	
				if (chr < '0' || chr > '9') {
					return false;
				}
	
			};
	
			function getChar(event) {
				if (event.which == null) {
					if (event.keyCode < 32) return null;
					return String.fromCharCode(event.keyCode) // IE
				}
	
				if (event.which != 0 && event.charCode != 0) {
					if (event.which < 32) return null;
					return String.fromCharCode(event.which) // остальные
				}
	
				return null; // специальная клавиша
			};
		

	statusMessage.classList.add('status');

	// form.addEventListener('submit', function (event) {
	// 	event.preventDefault();
	// 	form.appendChild(statusMessage);



	// 	let request = new XMLHttpRequest();
	// 	request.open('POST', 'server.php');
	// 	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

	// 	let formData = new FormData(form);

	// 	let obj = {};
	// 	formData.forEach(function (value, key) {
	// 		obj[key] = value;
	// 	});
	// 	;
	// 	let json = JSON.stringify(obj);

	// 	request.send(json);

	// 	request.addEventListener('readystatechange', function () {
	// 		if (request.readyState < 4) {
	// 			statusMessage.innerHTML = message.loading;
	// 		} else if (request.readyState === 4 && request.status == 200) {
	// 			statusMessage.innerHTML = message.success;
	// 		} else {
	// 			statusMessage.innerHTML = message.failure;
	// 		}
	// 	});

	// 	for (let i = 0; i < input.length; i++) {
	// 		input[i].value = '';
	// 	}
	// });


	// forma.addEventListener('submit', function (event) {
	// 	event.preventDefault();
	// 	forma.appendChild(statusMessage);

	// 	let request = new XMLHttpRequest();
	// 	request.open('POST', 'server.php');
	// 	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

	// 	let formaData = new FormData(forma);

	// 	let obj = {};
	// 	formaData.forEach(function (value, key) {
	// 		obj[key] = value;
	// 	});
	// 	let json = JSON.stringify(obj);

	// 	request.send(json);

	// 	request.addEventListener('readystatechange', function () {
	// 		if (request.readyState < 4) {
	// 			statusMessage.innerHTML = message.loading;
	// 		} else if (request.readyState === 4 && request.status == 200) {
	// 			statusMessage.innerHTML = message.success;
	// 		} else {
	// 			statusMessage.innerHTML = message.failure;
	// 		}
	// 	});

	// 	for (let i = 0; i < inputs.length; i++) {
	// 		inputs[i].value = '';
	// 	}
	// });

	// Отправка промисами

	function sendForm(elem){
		elem.addEventListener('submit', function(e){
			e.proventDefault();
				elem.appendChild(statusMessage);
				let formData = new FormData(elem),
					formaData = new FormData(elem);

				function postData(data){

					return new Promise(function(resolve, reject){
						let request = new XMLHttpRequest();

						request.open('POST', 'server.php');

						request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

						request.onreadystatechange = function(){
							if (request.readyState < 4) {
								resolve()
							} else if (request.readyState === 4) {
								if (request.status == 200 && request.status < 300) {
									resolve()
								} else {
									reject()
								}
							}
						};
						request.send(data);
					});
				} //end postData

				function clearInput(){
					for (let i = 0; i < input.length; i++){
						input[i].value = '';
					}
				}

				postData(formData)
					.then(()=> statusMessage.innerHTML = message.loading)
					.then(()=> {
						thanksModal.style.display = 'block';
						mainModal.style.display = 'none';
						statusMessage.innerHTML = '';
					})
					.catch(()=> statusMessage.innerHTML = message.failure)
					.then(clearInput);

				postData(formaData)
					.then(()=> statusMessage.innerHTML = message.loading)
					.then(()=> {
						thanksModal.style.display = 'block';
						mainModal.style.display = 'none';
						statusMessage.innerHTML = '';
					})
					.catch(()=> statusMessage.innerHTML = message.failure)
					.then(clearInput);
		});
	}
	sendForm(form);
	sendForm(forma);
});